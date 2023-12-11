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
 * Color of a device.
 */
export type Color = {
	/**
	 * The instance that identifies the capability.
	 */
	instance: "colorRgb";

	/**
	 * The type that identifies the capability.
	 */
	type: "devices.capabilities.color_setting";
};

/**
 * Color temperature of a device.
 */
export type ColorTemperature = {
	/**
	 * The instance that identifies the capability.
	 */
	instance: "colorTemperatureK";

	/**
	 * The type that identifies the capability.
	 */
	type: "devices.capabilities.color_setting";

	/**
	 * Parameters associated with the capability.
	 */
	parameters: {
		/**
		 * Range parameter.
		 */
		range: {
			/**
			 * Max value.
			 */
			max: number;

			/**
			 * Min value.
			 */
			min: number;
		};
	};
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
 * Identifies a capability.
 */
export type CapabilityIdentifier = Pick<Capability, "instance" | "type">;

/**
 * A capability that defines functionality available to a Govee device.
 */
export type Capability = Brightness | Color | ColorTemperature | OnOff;
