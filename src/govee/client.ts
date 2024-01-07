import streamDeck from "@elgato/streamdeck";
import axios, { AxiosResponse, RawAxiosRequestHeaders } from "axios";
import crypto from "node:crypto";
import type { GlobalSettings } from "../global-settings";
import type { CapabilityIdentifier, DIYScene, LightScene } from "./capability";
import type { GoveeResponse } from "./common";
import type { ControlRequest, ControlResponse } from "./control";
import type { Device, DeviceMetadata } from "./device";
import type { StateRequest, StateResponse } from "./state";

let devicesCache: DeviceMetadata[] | undefined = undefined;

/**
 * Provides a client capable of interacting with the Govee API.
 */
class GoveeClient {
	/**
	 * Clears the cache.
	 */
	public clearCache(): void {
		devicesCache = undefined;
	}

	/**
	 * Converts a hexadecimal color to a color supported by Govee.
	 * @param color Color as a hexadecimal string, for example "#ff00ff".
	 * @returns The numerical value of the color.
	 */
	public getColorFromHex(color: string): number {
		const values = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
		if (!values) {
			throw new Error(`Invalid color ${color}`);
		}

		// Reference: https://developer.govee.com/reference/control-you-devices#color_setting
		return ((parseInt(values[1], 16) & 0xff) << 16) | ((parseInt(values[2], 16) & 0xff) << 8) | ((parseInt(values[3], 16) & 0xff) << 0);
	}

	/**
	 * Gets the DIY scenes for a device.
	 * @param device The device.
	 * @returns Available DIY scenes.
	 */
	public async getDIYScenes(device: Device): Promise<DIYScene["parameters"]["options"]> {
		const res = await axios.post<GoveeResponse<DeviceMetadata>>(
			"https://openapi.api.govee.com/router/api/v1/device/diy-scenes",
			{
				payload: device,
				requestId: crypto.randomUUID()
			},
			{ headers: await this.getHeaders() }
		);

		this.validate(res, "Failed to get light scenes.");
		const [capability] = res.data.payload.capabilities;

		if (capability?.instance === "diyScene" && capability.type === "devices.capabilities.dynamic_scene") {
			return capability.parameters.options;
		}

		throw new Error("Device does not support DIY scenes");
	}

	/**
	 * Gets the device associated with the {@link deviceId}.
	 * @param deviceId Device identifier.
	 * @returns The device; otherwise an error is thrown.
	 */
	public async getDeviceOrThrow(deviceId: string): Promise<DeviceMetadata> | never {
		const device = (await this.getDevices()).find(({ device }) => device === deviceId);
		if (device !== undefined) {
			return device;
		}

		throw new Error("Device not found.");
	}

	/**
	 * Gets the state of a device.
	 * @param device Device to get the state of.
	 * @returns The device state.
	 */
	public async getDeviceState(device: Device): Promise<AxiosResponse<StateResponse>> {
		const res = await axios.post(
			"https://openapi.api.govee.com/router/api/v1/device/state",
			{
				payload: device,
				requestId: crypto.randomUUID()
			} satisfies StateRequest,
			{
				headers: await this.getHeaders()
			}
		);

		this.validate(res, "Failed to get device state.");
		return res;
	}

	/**
	 * Gets the available Govee devices.
	 * @returns The devices.
	 */
	public async getDevices(): Promise<DeviceMetadata[]> {
		if (devicesCache !== undefined) {
			return devicesCache;
		}

		const res = await axios.get("https://openapi.api.govee.com/router/api/v1/user/devices", { headers: await this.getHeaders() });
		this.validate(res, "Failed to get Govee devices.");

		return (devicesCache ??= Array.from(res.data.data));
	}

	/**
	 * Gets the light scenes for a device.
	 * @param device The device.
	 * @returns Available light scenes.
	 */
	public async getLightScenes(device: Device): Promise<LightScene["parameters"]["options"]> {
		const res = await axios.post<GoveeResponse<DeviceMetadata>>(
			"https://openapi.api.govee.com/router/api/v1/device/scenes",
			{
				payload: device,
				requestId: crypto.randomUUID()
			},
			{ headers: await this.getHeaders() }
		);

		this.validate(res, "Failed to get light scenes.");
		const [capability] = res.data.payload.capabilities;

		if (capability?.instance === "lightScene" && capability.type === "devices.capabilities.dynamic_scene") {
			return capability.parameters.options;
		}

		throw new Error("Device does not support light scenes");
	}

	/**
	 * Gets the current power state of the specified {@link device}.
	 * @param device Thd device.
	 * @returns Power state.
	 */
	public async getPowerState(device: Device): Promise<number> {
		const res = await this.getDeviceState(device);
		const capability = res.data.payload.capabilities.find((c) => c.instance === "powerSwitch" && c.type === "devices.capabilities.on_off" && c.state !== undefined);

		if (capability === undefined) {
			throw new Error("Device does not support switching power state");
		}

		return capability.state.value;
	}

	/**
	 * Sets the device brightness.
	 * @param device The device.
	 * @param brightness New brightness.
	 */
	public async setBrightness(device: Device, brightness: number): Promise<void> {
		await this.control(
			device,
			{
				instance: "brightness",
				type: "devices.capabilities.range"
			},
			brightness
		);
	}

	/**
	 * Sets the color temperature.
	 * @param device The device.
	 * @param color New color.
	 */
	public async setColor(device: Device, color: number): Promise<void> {
		await this.control(
			device,
			{
				instance: "colorRgb",
				type: "devices.capabilities.color_setting"
			},
			color
		);
	}

	/**
	 * Sets the color temperature.
	 * @param device The device.
	 * @param temperature New color temperature.
	 */
	public async setColorTemperature(device: Device, temperature: number): Promise<void> {
		await this.control(
			device,
			{
				instance: "colorTemperatureK",
				type: "devices.capabilities.color_setting"
			},
			temperature
		);
	}

	/**
	 * Sets the DIY scene for the specified device.
	 * @param device The device.
	 * @param sceneId Scene identifier.
	 */
	public async setDIYScene(device: Device, sceneId: number): Promise<void> {
		await this.control(
			device,
			{
				instance: "diyScene",
				type: "devices.capabilities.dynamic_scene"
			},
			sceneId
		);
	}

	/**
	 * Sets the light scene for the specified device.
	 * @param device The device.
	 * @param sceneId Scene identifier.
	 */
	public async setLightScene(device: Device, sceneId: number): Promise<void> {
		await this.control(
			device,
			{
				instance: "lightScene",
				type: "devices.capabilities.dynamic_scene"
			},
			sceneId
		);
	}

	/**
	 * Toggles the power state of the specified device.
	 * @param device Device to whose power state will be updated.
	 */
	public async togglePowerState(device: Device): Promise<void> {
		await this.control(
			device,
			{
				instance: "powerSwitch",
				type: "devices.capabilities.on_off"
			},
			1 - (await this.getPowerState(device))
		);
	}

	/**
	 * Turns a device off.
	 * @param device Device to turn off.
	 */
	public async turnOff(device: Device): Promise<void> {
		await this.control(
			device,
			{
				instance: "powerSwitch",
				type: "devices.capabilities.on_off"
			},
			0
		);
	}

	/**
	 * Turns a device on.
	 * @param device Device to turn on.
	 */
	public async turnOn(device: Device): Promise<void> {
		await this.control(
			device,
			{
				instance: "powerSwitch",
				type: "devices.capabilities.on_off"
			},
			1
		);
	}

	/**
	 * Controls the device.
	 * @param device Device to control.
	 * @param capability Capability to change.
	 * @param value New value.
	 * @returns The result of controlling the device.
	 */
	private async control<T extends CapabilityIdentifier>(device: Device, capability: T, value: unknown): Promise<AxiosResponse<ControlResponse<T>>> {
		const res = await axios.post(
			"https://openapi.api.govee.com/router/api/v1/device/control",
			{
				payload: {
					...device,
					capability: {
						...capability,
						value
					}
				},
				requestId: crypto.randomUUID()
			} satisfies ControlRequest<T>,
			{
				headers: await this.getHeaders()
			}
		);

		this.validate(res, "Failed to control device.");
		return res.data;
	}

	/**
	 * Gets the headers that should accommodate a request.
	 * @returns The headers.
	 */
	private async getHeaders(): Promise<RawAxiosRequestHeaders> {
		const { apiKey } = await streamDeck.settings.getGlobalSettings<GlobalSettings>();
		return {
			"Content-Type": "application/json",
			"Govee-API-Key": apiKey
		};
	}

	/**
	 * Validates the success of the response.
	 * @param response Response to validate.
	 * @param err Accompanying error message logged when the validation fails.
	 */
	private validate(response: AxiosResponse<GoveeResponse>, err: string): void {
		if (response.status !== 200) {
			throw new Error(`[${response.status}] ${response.statusText}: ${err}`);
		}

		if (response.data.code !== undefined && response.data.code !== 200) {
			throw new Error(`[${response.data.code}] ${response.data.msg}: ${err}`);
		}
	}
}

/**
 * Govee client capable of controlling Govee devices via the public API.
 */
export const goveeClient = new GoveeClient();
