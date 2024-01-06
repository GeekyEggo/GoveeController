import streamDeck, { SendToPluginEvent } from "@elgato/streamdeck";
import type { CapabilityIdentifier } from "./govee/capability";
import { goveeClient } from "./govee/client";

/**
 * Determines whether the specified payload is a request to get Govee devices.
 * @param ev Source event.
 * @returns `true` when the payload is requesting the devices; otherwise `false`.
 */
export function isRequestingDevices(ev: SendToPluginEvent<object, object>): boolean {
	return ev.payload !== null && "event" in ev.payload && typeof ev.payload.event === "string" && ev.payload.event === "getDevices";
}

/**
 * Sends the list of Govee devices to the property inspector associated with the action.
 * @param ev Action the payload is associated with.
 * @param capability Payload provided by the property inspector.
 */
export async function trySendDevices(ev: SendToPluginEvent<DataSourceRequest, object>, capability: CapabilityIdentifier): Promise<void> {
	if (!isRequestingDevices(ev)) {
		return;
	}

	try {
		if (ev.payload.isRefresh) {
			goveeClient.clearCache();
		}

		const devices = await goveeClient.getDevices();
		ev.action.sendToPropertyInspector({
			event: ev.payload.event,
			items: devices
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
 * Request from the UI for a data source.
 */
export type DataSourceRequest = {
	/**
	 * Event identifying the data source.
	 */
	event: string;

	/**
	 * Whether a refresh data source is being requested.
	 */
	isRefresh?: true;
};

/**
 * Response to the UI with the data source information.
 */
export type DataSourceResponse = {
	/**
	 * Event identifying the data source.
	 */
	event: string;

	/**
	 * Data source items.
	 */
	items: (Item | ItemGroup)[];
};

/**
 * Data source item.
 */
type Item = {
	/**
	 * Whether the item is disabled.
	 */
	disabled?: boolean;

	/**
	 * Label shown to the user.
	 */
	label?: string;

	/**
	 * Value of the item that will be persisted.
	 */
	value: string;
};

/**
 * Data source item group.
 */
type ItemGroup = {
	/**
	 * Label shown to the user.
	 */
	label?: string;

	/**
	 * Child items.
	 */
	children: Item[];
};
