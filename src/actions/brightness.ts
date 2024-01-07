import streamDeck, { Action, action, DialDownEvent, DialRotateEvent, KeyDownEvent, SendToPluginEvent, SingletonAction, TouchTapEvent, WillAppearEvent } from "@elgato/streamdeck";

import { clearDialTimeout, dialTimeout } from "../dial-timeout";
import { goveeClient } from "../govee/client";
import { clamp } from "../math";
import { DataSourceRequest, trySendDevices } from "../ui";

/**
 * Sets the brightness of a device.
 */
@action({ UUID: "com.geekyeggo.goveecontroller.brightness" })
export class Brightness extends SingletonAction<BrightnessSettings> {
	/**
	 * Sets the brightness based on the current dial value.
	 * @param param0 Event arguments.
	 * @param param0.action Action that triggered the event.
	 * @param param0.payload Payload information.
	 * @param param0.payload.settings Settings associated with the action.
	 */
	public async onDialDown({ action, payload: { settings } }: DialDownEvent<BrightnessSettings>): Promise<void> {
		if (settings.brightness !== undefined) {
			await this.setBrightness(action, settings.deviceId, settings.brightness);
			clearDialTimeout(action.id);
		}
	}

	/**
	 * Sets desired brightness of the device, but does not change it's brightness until {@link Brightness.onDialDown}.
	 * @param param0 Event arguments.
	 * @param param0.action Action that triggered the event.
	 * @param param0.payload Payload information.
	 * @param param0.payload.settings Settings associated with the action.
	 * @param param0.payload.ticks Number of rotations.
	 */
	public async onDialRotate({ action, payload: { settings, ticks } }: DialRotateEvent<BrightnessSettings>): Promise<void> {
		settings.brightness = clamp((settings.brightness ?? 50) + ticks * 5, 0, 100);

		await action.setSettings(settings);
		await action.setFeedback({
			value: {
				opacity: 1,
				value: `${settings.brightness}%`
			},
			indicator: {
				opacity: 1,
				value: settings.brightness
			}
		});

		dialTimeout(action.id, () =>
			action.setFeedback({
				value: { opacity: 0.2 },
				indicator: { opacity: 0.2 }
			})
		);
	}

	/**
	 * Sets the brightness of the device.
	 * @param ev Event arguments.
	 */
	public async onKeyDown(ev: KeyDownEvent<BrightnessSettings>): Promise<void> {
		const { deviceId, brightness } = ev.payload.settings;
		this.setBrightness(ev.action, deviceId, brightness || 50);
	}

	/**
	 * Handles requests from the property inspector, providing the data sources for device drop down.
	 * @param ev Event arguments.
	 */
	public async onSendToPlugin(ev: SendToPluginEvent<DataSourceRequest, BrightnessSettings>): Promise<void> {
		await trySendDevices(ev, {
			instance: "brightness",
			type: "devices.capabilities.range"
		});
	}

	/**
	 * Handles the touch tap event. When the device is turned off, it is turned on based on the dial's current value; otherwise the device is turned off.
	 * @param ev Event arguments.
	 */
	public async onTouchTap(ev: TouchTapEvent<BrightnessSettings>): Promise<void> {
		try {
			// Ensure we have device information.
			if (ev.payload.settings.deviceId === undefined) {
				throw new Error("No device selected.");
			}

			// Get the device, and it's current power state
			const device = await goveeClient.getDeviceOrThrow(ev.payload.settings.deviceId);
			const powerState = await goveeClient.getPowerState(device);

			// When on, turn off; otherwise attempt to set the brightness of the device based on the dials value.
			if (powerState === 1) {
				await goveeClient.turnOff(device);
			} else {
				await goveeClient.setBrightness(device, ev.payload.settings.brightness ?? 50);
			}

			clearDialTimeout(ev.action.id);
		} catch (e) {
			ev.action.showAlert();
			streamDeck.logger.error("Failed to toggle power state of device.", e);
		}
	}

	/**
	 * Handles the action appearing, ensuring its settings are correct, and the layout is visible.
	 * @param ev Event arguments.
	 */
	public async onWillAppear(ev: WillAppearEvent<BrightnessSettings>): Promise<void> {
		// Standardize the settings.
		if (typeof ev.payload.settings.brightness === "string") {
			ev.payload.settings.brightness = parseInt(ev.payload.settings.brightness);
			await ev.action.setSettings(ev.payload.settings);
		}

		// When the action is an encoder, set the layout.
		if (ev.payload.controller === "Encoder") {
			await ev.action.setFeedback({
				value: {
					opacity: 0.2,
					value: `${ev.payload.settings.brightness ?? 50}%`
				},
				indicator: {
					opacity: 0.2,
					value: ev.payload.settings.brightness ?? 50
				}
			});
		}
	}

	/**
	 * Sets the brightness of the {@link deviceId}.
	 * @param action Action that triggered the setting.
	 * @param deviceId Govee device identifier.
	 * @param brightness Desired brightness.
	 */
	private async setBrightness(action: Action, deviceId: string | undefined, brightness: number): Promise<void> {
		try {
			// Ensure we have device information.
			if (deviceId === undefined) {
				throw new Error("No device selected.");
			}

			const device = await goveeClient.getDeviceOrThrow(deviceId);

			// Set the brightness.
			if (brightness === 0) {
				goveeClient.turnOff(device);
			} else {
				goveeClient.setBrightness(device, brightness);
			}

			await action.showOk();
		} catch (e) {
			action.showAlert();
			streamDeck.logger.error("Failed to set brightness of device.", e);
		}
	}
}

/**
 * Settings for {@link Brightness}.
 */
type BrightnessSettings = {
	/**
	 * Preferred brightness.
	 */
	brightness?: number;

	/**
	 * The device identifier.
	 */
	deviceId?: string;
};
