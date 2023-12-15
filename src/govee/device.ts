import type { Capability } from "./capability";
import type { GoveeResponse } from "./common";

/**
 * Provides identifiable information about a Govee device.
 */
export type Device = {
	/**
	 * Unique identifier.
	 */
	device: string;

	/**
	 * SKU of the Govee product.
	 */
	sku: string;
};

/**
 * Provides metadata associated with a Govee device, including its capabilities.
 */
export type DeviceMetadata = Device & {
	/**
	 * Device capabilities.
	 */
	capabilities: Capability[];

	/**
	 * Name of the device, as defined within the Govee Home App.
	 */
	deviceName: string;

	/**
	 * Type of the device.
	 */
	type:
		| "devices.types.air_purifier"
		| "devices.types.aroma_diffuser"
		| "devices.types.dehumidifier"
		| "devices.types.heater"
		| "devices.types.humidifier"
		| "devices.types.ice_maker"
		| "devices.types.light"
		| "devices.types.sensor"
		| "devices.types.socket"
		| "devices.types.thermometer";
};

/**
 * Response information for a collection of devices.
 */
export type DeviceCollectionResponse = GoveeResponse & {
	/**
	 * Devices associated with the account.
	 */
	data: DeviceMetadata[];
};
