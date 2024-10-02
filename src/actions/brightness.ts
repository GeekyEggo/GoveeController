import streamDeck, {
	Action,
	DialRotateEvent,
	DidReceiveSettingsEvent,
	KeyDownEvent,
	SendToPluginEvent,
	SingletonAction,
	WillAppearEvent,
	action,
	type DialAction
} from "@elgato/streamdeck";

import { clearDebounce, debounce } from "../debounce";
import { goveeClient } from "../govee/client";
import { clamp } from "../math";
import { DataSourceRequest, trySendDevices } from "../ui";

/**
 * Default brightness.
 */
const defaultBrightness = 25;

/**
 * Sets the brightness of a device.
 */
@action({ UUID: "com.geekyeggo.goveecontroller.brightness" })
export class Brightness extends SingletonAction<BrightnessSettings> {
	/**
	 * Initializes a new instance of the {@link Brightness} class.
	 */
	constructor() {
		super();

		this.onDialDown = (ev): Promise<void> => this.togglePowerState(ev.action, ev.payload.settings);
		this.onTouchTap = (ev): Promise<void> => this.togglePowerState(ev.action, ev.payload.settings);
	}

	/**
	 * Increases or decreases the preferred brightness; when the device is on, the brightness of the device is set.
	 * @param ev Event arguments
	 */
	public async onDialRotate(ev: DialRotateEvent<BrightnessSettings>): Promise<void> {
		const {
			action,
			payload: { settings, ticks }
		} = ev;

		// Determine the new brightness, persist it, and set the feedback.
		settings.brightness = clamp((settings.brightness ?? defaultBrightness) + ticks * 5, 5, 100);
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

		// Debounce the chance to prevent throttling.
		const { deviceId, brightness } = settings;
		debounce(action.id, () => {
			this.setFeedback(action, settings, 0.2);
			this.setBrightness(action, deviceId, brightness, false);
		});
	}

	/**
	 * Updates the feedback to show the name of the device.
	 * @param ev Event arguments.
	 */
	public onDidReceiveSettings(ev: DidReceiveSettingsEvent<BrightnessSettings>): void {
		ev.action.setTitle(ev.payload.settings.deviceName ?? "Brightness");
	}

	/**
	 * Sets the brightness of the device.
	 * @param ev Event arguments.
	 */
	public async onKeyDown(ev: KeyDownEvent<BrightnessSettings>): Promise<void> {
		this.setBrightness(ev.action, ev.payload.settings.deviceId, ev.payload.settings.brightness ?? defaultBrightness);
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
		if (ev.action.isDial()) {
			await this.setFeedback(ev.action, ev.payload.settings, 0.2);
		}
	}

	/**
	 * Sets the brightness of the {@link deviceId}.
	 * @param action Action that triggered the setting.
	 * @param deviceId Govee device identifier.
	 * @param brightness Desired brightness.
	 * @param turnOn Determines whether the light can be turned on if the power state is off.
	 */
	private async setBrightness(action: Action, deviceId: string | undefined, brightness: number, turnOn = true): Promise<void> {
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
				if (!turnOn && (await goveeClient.getPowerState(device)) === 0) {
					return;
				}

				goveeClient.setBrightness(device, brightness);
			}

			if (action.isKey()) {
				await action.showOk();
			}
		} catch (e) {
			action.showAlert();
			streamDeck.logger.error("Failed to set brightness of device.", e);
		}
	}

	/**
	 * Sets the visual feedback of the touchscreen.
	 * @param action Action whose feedback will be set.
	 * @param settings Brightness settings.
	 * @param opacity Opacity of the feedback.
	 */
	private async setFeedback(action: DialAction, settings: BrightnessSettings, opacity: 0.2 | 1): Promise<void> {
		const brightness = settings.brightness ?? defaultBrightness;
		await action.setFeedback({
			value: {
				opacity,
				value: `${brightness}%`
			},
			indicator: {
				opacity,
				value: brightness
			},
			title: settings.deviceName ?? "Brightness"
		});
	}

	/**
	 * Toggles the power state of the specified device specified in the {@param deviceId}.
	 * @param action Action associated with the device.
	 * @param settings Brightness settings.
	 */
	private async togglePowerState(action: Action, settings: BrightnessSettings): Promise<void> {
		try {
			clearDebounce(action.id);

			// Ensure we have device information.
			if (settings.deviceId === undefined) {
				throw new Error("No device selected.");
			}

			// Get the device, and toggle the power state
			const device = await goveeClient.getDeviceOrThrow(settings.deviceId);
			if ((await goveeClient.getPowerState(device)) === 0) {
				await goveeClient.setBrightness(device, settings.brightness ?? defaultBrightness);
			} else {
				await goveeClient.turnOff(device);
			}
		} catch (e) {
			action.showAlert();
			streamDeck.logger.error("Failed to toggle power state of device.", e);
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

	/**
	 * The device name.
	 */
	deviceName?: string;
};
