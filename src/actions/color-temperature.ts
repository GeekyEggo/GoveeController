import streamDeck, { action, KeyDownEvent, SendToPluginEvent, SingletonAction } from "@elgato/streamdeck";

import type { ColorTemperature as ColorTemperatureCapability } from "../govee/capability";
import { goveeClient } from "../govee/client";
import { DataSourceRequest, trySendDevices } from "../ui";

/**
 * Sets the color temperature of a device.
 */
@action({ UUID: "com.geekyeggo.goveecontroller.colortemperature" })
export class ColorTemperature extends SingletonAction<ColorTemperatureSettings> {
	/** @inheritdoc */
	public async onKeyDown(ev: KeyDownEvent<ColorTemperatureSettings>): Promise<void> {
		try {
			// Ensure we have device information.
			const { deviceId, temperature } = ev.payload.settings;
			if (deviceId === undefined) {
				throw new Error("No device selected.");
			}

			// Find the device.
			const device = (await goveeClient.getDevices()).find((d) => d.device === deviceId);
			if (device === undefined) {
				throw new Error("Device not found.");
			}

			const capability = device.capabilities.find(
				(c) => c.instance === "colorTemperatureK" && c.type === "devices.capabilities.color_setting" && c.parameters !== undefined
			) as ColorTemperatureCapability;

			if (capability === undefined) {
				throw new Error("Unable to determine color temperature range of device.");
			}

			// Set the color temperature as a percentage of the range.
			const value =
				(parseInt(temperature === undefined ? "50" : temperature) / 100) * (capability.parameters.range.max - capability.parameters.range.min) + capability.parameters.range.min;
			goveeClient.setColorTemperature(device, value);

			await ev.action.showOk();
		} catch (e) {
			ev.action.showAlert();
			streamDeck.logger.error("Failed to set color temperature of device.", e);
		}
	}

	/** @inheritdoc */
	public async onSendToPlugin(ev: SendToPluginEvent<DataSourceRequest, ColorTemperatureSettings>): Promise<void> {
		return trySendDevices(ev, {
			instance: "colorTemperatureK",
			type: "devices.capabilities.color_setting"
		});
	}
}

/**
 * Settings for {@link ColorTemperature}.
 */
type ColorTemperatureSettings = {
	/**
	 * The device identifier.
	 */
	deviceId?: string;

	/**
	 * Preferred temperature.
	 */
	temperature?: string;
};
