/**
 * Brightness of a device.
 */
export type Brightness = {
	/**
	 * The instance that identifies the capability.
	 */
	instance: "brightness";

	/**
	 * The type that identifies the capability.
	 */
	type: "devices.capabilities.range";
};

/**
 * Power state of a device.
 */
export type OnOff = {
	/**
	 * The instance that identifies the capability.
	 */
	instance: "powerSwitch";

	/**
	 * The type that identifies the capability.
	 */
	type: "devices.capabilities.on_off";
};

/**
 * A capability that defines functionality available to a Govee device.
 */
export type Capability = Brightness | OnOff;
