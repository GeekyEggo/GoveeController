import { Capability, OnOff } from "./capability";
import { GoveeRequest, GoveeResponse } from "./common";
import { Device } from "./device";

/**
 * Request to control a Govee device.
 */
export type ControlRequest = GoveeRequest<
	Device & {
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
	}
>;

/**
 * Response after sending a control request.
 */
export type ControlResponse<T> = GoveeResponse & {
	/**
	 * Capability associated with the request.
	 */
	capability: T;
};

/**
 * Power state control.
 */
export type OnOffControl = OnOff & {
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
