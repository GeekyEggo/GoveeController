/**
 * Enables turning a device on/off.
 */
export type OnOff = {
	/**
	 * The type that identifies the capability.
	 */
	type: "devices.capabilities.on_off";

	/**
	 * The instance that identifies the capability.
	 */
	instance: "powerSwitch";
};

/**
 * A capability that defines functionality available to a Govee device.
 */
export type Capability = OnOff;
