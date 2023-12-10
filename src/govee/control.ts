import { Capability } from "./capability";
import { Device } from "./device";

/**
 * A request to control a Govee device.
 */
export type ControlRequest = {
	/**
	 * Payload that contains the device to control, and the capability being changed.
	 */
	payload: Device & {
		/**
		 * Capability being changed.
		 */
		capability: {
			/**
			 * The instance of the capability to control.
			 */
			instance: Capability["instance"];

			/**
			 * The type of the capability to control.
			 */
			type: Capability["type"];

			/**
			 * The new value of the capability.
			 */
			value: unknown;
		};
	};

	/**
	 * Unique identifier that identifies the request from a response.
	 */
	requestId: string;
};
