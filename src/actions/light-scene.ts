import streamDeck, { action, DidReceiveSettingsEvent, KeyDownEvent, SendToPluginEvent, SingletonAction, WillAppearEvent } from "@elgato/streamdeck";

import { goveeClient } from "../govee/client";
import { DataSourceRequest, DataSourceResponse, trySendDevices } from "../ui";

/**
 * Sets the light scene of a device.
 */
@action({ UUID: "com.geekyeggo.goveecontroller.light-scene" })
export class LightScene extends SingletonAction<LightSceneSettings> {
	/** @inheritdoc */
	public async onDidReceiveSettings(ev: DidReceiveSettingsEvent<LightSceneSettings>): Promise<void> {
		if (ev.payload.settings.deviceId) {
			await this.sendLightScenes(ev.action, ev.payload.settings.deviceId);
		}
	}

	/** @inheritdoc */
	public async onKeyDown(ev: KeyDownEvent<LightSceneSettings>): Promise<void> {
		try {
			// Ensure we have device identifier.
			const { deviceId, sceneId } = ev.payload.settings;
			if (deviceId === undefined) {
				throw new Error("No device selected.");
			}

			// Ensure we have a scene identifier.
			if (sceneId === undefined) {
				throw new Error("No scene selected.");
			}

			// Set the scene
			await goveeClient.setLightScene(deviceId, sceneId);
			await ev.action.showOk();
		} catch (e) {
			ev.action.showAlert();
			streamDeck.logger.error("Failed to set light scene of device.", e);
		}
	}

	/** @inheritdoc */
	public async onSendToPlugin(ev: SendToPluginEvent<DataSourceRequest, LightSceneSettings>): Promise<void> {
		if (ev.payload.event === "getLightScenes") {
			if (ev.payload.isRefresh) {
				goveeClient.clearCache();
			}

			const { deviceId } = await ev.action.getSettings();
			await this.sendLightScenes(ev.action, deviceId);
		} else {
			await trySendDevices(ev, {
				instance: "lightScene",
				type: "devices.capabilities.dynamic_scene"
			});
		}
	}

	/**
	 * Sends the light scenes associated with the {@link deviceId} to the property inspector.
	 * @param action Light scene Stream Deck Action.
	 * @param deviceId Device identifier whose light scenes should be selected.
	 */
	private async sendLightScenes(action: Action, deviceId: string | undefined): Promise<void> {
		if (deviceId === undefined) {
			return;
		}

		const getLightScenes = async (): Promise<DataSourceResponse["items"]> => {
			try {
				return (await goveeClient.getLightScenes(deviceId!))
					.sort((x, y) => x.name.localeCompare(y.name))
					.map((s) => {
						return {
							label: s.name,
							value: s.value.id.toString()
						};
					});
			} catch (e) {
				action.showAlert();
				streamDeck.logger.error("Failed to load scenes", e);

				return [
					{
						disabled: true,
						label: "Failed to load scenes",
						value: ""
					}
				];
			}
		};

		await action.sendToPropertyInspector({
			event: "getLightScenes",
			items: await getLightScenes()
		} satisfies DataSourceResponse);
	}
}

/**
 * Set light scene action.
 */
type Action = WillAppearEvent<LightSceneSettings>["action"];

/**
 * Settings for {@link LightScene}.
 */
type LightSceneSettings = {
	/**
	 * The device identifier.
	 */
	deviceId?: string;

	/**
	 * Light scene.
	 */
	sceneId?: number;
};
