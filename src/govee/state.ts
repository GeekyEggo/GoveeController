import { OnOff } from "./capability";
import { GoveeRequest } from "./common";
import { Device } from "./device";

/**
 * Request to get the device state.
 */
export type StateRequest = GoveeRequest<Device>;

/**
 * Response information for a device state.
 */
export type StateResponse = Response & {
	/**
	 * Payload that defines the state of the device.
	 */
	payload: Device & {
		/**
		 * Device capabilities.
		 */
		capabilities: State[];
	};
};

/**
 * Power state of a device.
 */
export type OnOffState = OnOff & {
	/**
	 * Current power state of the device.
	 */
	state: {
		/**
		 * Whether the device is on or off.
		 */
		value: number;
	};
};

/**
 * State of a device.
 */
export type State = OnOffState;
