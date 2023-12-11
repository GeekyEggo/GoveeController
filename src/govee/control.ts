import type { Capability } from "./capability";
import type { GoveeRequest, GoveeResponse } from "./common";
import type { Device } from "./device";

/**
 * Request to control a Govee device.
 */
export type ControlRequest<T extends Capability> = GoveeRequest<
	Device & {
		/**
		 * Capability being changed.
		 */
		capability: T & {
			/**
			 * The new value of the capability.
			 */
			value: unknown;
		};
	}
>;

/**
 * Response after sending a control request.
 */
export type ControlResponse<T> = GoveeResponse & {
	/**
	 * Capability associated with the request.
	 */
	capability: T & {
		/**
		 * State of the control request.
		 */
		state: {
			/**
			 * Status of the request.
			 */
			status: string;
		};
	};
};
