import streamDeck from "@elgato/streamdeck";
import axios, { AxiosResponse, RawAxiosRequestHeaders } from "axios";
import crypto from "node:crypto";
import type { GlobalSettings } from "../global-settings";
import type { ControlRequest } from "./control";
import type { Device, DeviceMetadata } from "./device";

/**
 * Provides a client capable of interacting with the Govee API.
 */
class GoveeClient {
	/**
	 * Gets the available Govee devices.
	 * @returns The devices.
	 */
	public async getDevices(): Promise<AxiosResponse<DeviceMetadata[]>> {
		return axios.get("https://openapi.api.govee.com/router/api/v1/user/devices", { headers: await this.getHeaders() });
	}

	/**
	 * Turns a device off.
	 * @param device Device to turn off.
	 */
	public async turnOff(device: Device): Promise<void> {
		await this.setPowerSwitch(device, false);
	}

	/**
	 * Turns a device on.
	 * @param device Device to turn on.
	 */
	public async turnOn(device: Device): Promise<void> {
		await this.setPowerSwitch(device, true);
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
	 * Sets the power state of the {@link device}.
	 * @param device Device to control.
	 * @param on `true` when the device should be turned on.
	 * @returns Promise fulfilled when the request has been sent to Govee.
	 */
	private async setPowerSwitch(device: Device, on: boolean): Promise<void> {
		const res = await axios.post(
			"https://openapi.api.govee.com/router/api/v1/device/control",
			{
				requestId: crypto.randomUUID(),
				payload: {
					...device,
					capability: {
						instance: "powerSwitch",
						type: "devices.capabilities.on_off",
						value: on ? 1 : 0
					}
				}
			} satisfies ControlRequest,
			{
				headers: await this.getHeaders()
			}
		);

		return res.data;
	}
}

/**
 * Govee client capable of controlling Govee devices via the public API.
 */
export const goveeClient = new GoveeClient();
