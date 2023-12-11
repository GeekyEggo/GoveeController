import streamDeck, { action, KeyDownEvent, SendToPluginEvent, SingletonAction } from "@elgato/streamdeck";

import { goveeClient } from "../govee/client";
import { DataSourceRequest, trySendDevices } from "../ui";

/**
 * Sets the color of a device.
 */
@action({ UUID: "com.geekyeggo.goveecontroller.color" })
export class Color extends SingletonAction<ColorSettings> {
	/** @inheritdoc */
	public async onKeyDown(ev: KeyDownEvent<ColorSettings>): Promise<void> {
		try {
			// Ensure we have device information.
			const { deviceId, color } = ev.payload.settings;
			if (deviceId === undefined) {
				throw new Error("No device selected.");
			}

			// Find the device.
			const device = (await goveeClient.getDevices()).find((d) => d.device === deviceId);
			if (device === undefined) {
				throw new Error("Device not found.");
			}

			// Set the color.
			const value = goveeClient.getColorFromHex(color || "#ffffff");
			goveeClient.setColor(device, value);

			await ev.action.showOk();
		} catch (e) {
			ev.action.showAlert();
			streamDeck.logger.error("Failed to set color of device.", e);
		}
	}

	/** @inheritdoc */
	public async onSendToPlugin(ev: SendToPluginEvent<DataSourceRequest, ColorSettings>): Promise<void> {
		return trySendDevices(ev, {
			instance: "colorRgb",
			type: "devices.capabilities.color_setting"
		});
	}
}

/**
 * Settings for {@link Color}.
 */
type ColorSettings = {
	/**
	 * The device identifier.
	 */
	deviceId?: string;

	/**
	 * Preferred color.
	 */
	color?: string;
};
