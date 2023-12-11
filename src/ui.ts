import streamDeck, { SendToPluginEvent } from "@elgato/streamdeck";
import { Capability } from "./govee/capability";
import { goveeClient } from "./govee/client";

/**
 * Determines whether the specified payload is a request to get Govee devices.
 * @param ev Source event.
 * @returns `true` when the payload is requesting the devices; otherwise `false`.
 */
export function isRequestingDevices(ev: SendToPluginEvent<object, object>): boolean {
	return ev.payload !== null && "event" in ev.payload && "requestId" in ev.payload && typeof ev.payload.event === "string" && typeof ev.payload.requestId == "string";
}

/**
 * Sends the list of Govee devices to the property inspector associated with the action.
 * @param ev Action the payload is associated with.
 * @param capability Payload provided by the property inspector.
 */
export async function trySendDevices(ev: SendToPluginEvent<DataSourceRequest, object>, capability: Capability): Promise<void> {
	if (!isRequestingDevices(ev)) {
		return;
	}

	try {
		const devices = await goveeClient.getDevices();
		ev.action.sendToPropertyInspector({
			event: ev.payload.event,
			requestId: ev.payload.requestId,
			data: devices
				.filter((d) => d.capabilities.findIndex((c) => c.instance === capability.instance && c.type === capability.type) >= 0)
				.sort((a, b) => a.deviceName.localeCompare(b.deviceName))
				.map((device) => {
					return {
						value: device.device,
						label: device.deviceName
					};
				})
		} satisfies DataSourceResponse);
	} catch (e) {
		streamDeck.logger.error("Failed to send get devices", e);
	}
}

/**
 * Represents a data source request sent from the property inspector.
 */
export type DataSourceRequest = {
	/**
	 * Event that identifies the type of data to load.
	 */
	event: string;

	/**
	 * Request identifier.
	 */
	requestId: string;
};

/**
 * Provides the data source to the property inspector.
 */
type DataSourceResponse = DataSourceRequest & {
	/**
	 * The items.
	 */
	data: {
		/**
		 * Whether the item is disabled.
		 */
		disabled?: boolean;

		/**
		 * Label shown to the user.
		 */
		label?: string;

		/**
		 * Value associated with the item, for example the device identifier.
		 */
		value: string;
	}[];
};
