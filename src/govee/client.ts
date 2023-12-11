import streamDeck from "@elgato/streamdeck";
import axios, { AxiosResponse, RawAxiosRequestHeaders } from "axios";
import crypto from "node:crypto";
import type { GlobalSettings } from "../global-settings";
import type { Capability } from "./capability";
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
		this.validate(res, "Failed to get Govee devices");

		return (devicesCache ??= res.data);
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
	 * Toggles the power state of the specified device.
	 * @param device Device to whose power state will be updated.
	 */
	public async togglePowerState(device: Device): Promise<void> {
		const res = await this.getDeviceState(device);
		const capability = res.data.payload.capabilities.find((c) => c.instance === "powerSwitch" && c.type === "devices.capabilities.on_off" && c.state !== undefined);

		if (capability === undefined) {
			throw new Error("Device does not support switching power state");
		}

		await this.control(
			device,
			{
				instance: "powerSwitch",
				type: "devices.capabilities.on_off"
			},
			1 - capability.state.value
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
			1
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
	private async control<T extends Capability>(device: Device, capability: T, value: unknown): Promise<AxiosResponse<ControlResponse<T>>> {
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
