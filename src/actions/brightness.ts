import streamDeck, { action, KeyDownEvent, SendToPluginEvent, SingletonAction } from "@elgato/streamdeck";

import { goveeClient } from "../govee/client";
import { DataSourceRequest, trySendDevices } from "../ui";

/**
 * Sets the brightness of a device.
 */
@action({ UUID: "com.geekyeggo.goveecontroller.brightness" })
export class Brightness extends SingletonAction<BrightnessSettings> {
	/** @inheritdoc */
	public async onKeyDown(ev: KeyDownEvent<BrightnessSettings>): Promise<void> {
		try {
			// Ensure we have device information.
			const { deviceId, brightness } = ev.payload.settings;
			if (deviceId === undefined) {
				throw new Error("No device selected.");
			}

			// Find the device.
			const device = (await goveeClient.getDevices()).find((d) => d.device === deviceId);
			if (device === undefined) {
				throw new Error("Device not found.");
			}

			// Set the brightness.
			const value = parseInt(brightness === undefined ? "50" : brightness);
			if (value === 0) {
				goveeClient.turnOff(device);
			} else {
				goveeClient.setBrightness(device, value);
			}

			await ev.action.showOk();
		} catch (e) {
			ev.action.showAlert();
			streamDeck.logger.error("Failed to set brightness of device.", e);
		}
	}

	/** @inheritdoc */
	public async onSendToPlugin(ev: SendToPluginEvent<DataSourceRequest, BrightnessSettings>): Promise<void> {
		return trySendDevices(ev, {
			instance: "brightness",
			type: "devices.capabilities.range"
		});
	}
}

/**
 * Settings for {@link Brightness}.
 */
type BrightnessSettings = {
	/**
	 * Preferred brightness.
	 */
	brightness?: string;

	/**
	 * The device identifier.
	 */
	deviceId?: string;
};
