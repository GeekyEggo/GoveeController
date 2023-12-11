import streamDeck, { action, KeyDownEvent, SendToPluginEvent, SingletonAction } from "@elgato/streamdeck";

import { goveeClient } from "../govee/client";
import { DataSourceRequest, trySendDevices } from "../ui";

/**
 * Sets the power state of a Govee device.
 */
@action({ UUID: "com.geekyeggo.goveecontroller.turnonoff" })
export class TurnOnOff extends SingletonAction<TurnOnOffSettings> {
	/** @inheritdoc */
	public async onKeyDown(ev: KeyDownEvent<TurnOnOffSettings>): Promise<void> {
		// Ensure we have device information.
		const { deviceId, operation } = ev.payload.settings;
		if (deviceId === null || operation === null) {
			return ev.action.showAlert();
		}

		try {
			// Find the device.
			const device = (await goveeClient.getDevices()).find((d) => d.device === deviceId);
			if (device === undefined) {
				return ev.action.showAlert();
			}

			// Update the power state.
			switch (operation) {
				case Operation.TurnOn.toString():
					goveeClient.turnOn(device);
					break;

				case Operation.TurnOff.toString():
					goveeClient.turnOff(device);
					break;

				default:
					goveeClient.togglePowerState(device);
					break;
			}

			await ev.action.showOk();
		} catch (e) {
			ev.action.showAlert();
			streamDeck.logger.error("Failed to set power state of device", e);
		}
	}

	/** @inheritdoc */
	public async onSendToPlugin(ev: SendToPluginEvent<DataSourceRequest, TurnOnOffSettings>): Promise<void> {
		return trySendDevices(ev, {
			instance: "powerSwitch",
			type: "devices.capabilities.on_off"
		});
	}
}

/**
 * Settings for {@link TurnOnOff}.
 */
type TurnOnOffSettings = {
	/**
	 * The device identifier.
	 */
	deviceId?: string;

	/**
	 * The operation to take when pressing the action.
	 */
	operation?: string;
};

/**
 * Determines the operation to execute when pressing {@link TurnOnOff}.
 */
enum Operation {
	/**
	 * Toggles the device on/off.
	 */
	Toggle = 0,

	/**
	 * Turns the device on.
	 */
	TurnOn = 1,

	/**
	 * Turns the device off.
	 */
	TurnOff = 2
}
