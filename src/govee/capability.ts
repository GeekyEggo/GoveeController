/**
 * Brightness of the device.
 */
export type Brightness = CapabilityBase<"brightness", "devices.capabilities.range">;

/**
 * Color of the device.
 */
export type Color = CapabilityBase<"colorRgb", "devices.capabilities.color_setting">;

/**
 * Color temperature of the device.
 */
export type ColorTemperature = CapabilityBase<"colorTemperatureK", "devices.capabilities.color_setting"> & {
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
 * DIY scene of a the device.
 */
export type DIYScene = CapabilityBase<"diyScene", "devices.capabilities.dynamic_scene"> & {
	/**
	 * Parameters associated with the capability.
	 */
	parameters: {
		/**
		 * Available light scenes.
		 */
		options: {
			/**
			 * Name of the light scene.
			 */
			name: string;

			/**
			 * Scene identifier.
			 */
			value: number;
		}[];
	};
};

/**
 * Light scene of a the device.
 */
export type LightScene = CapabilityBase<"lightScene", "devices.capabilities.dynamic_scene"> & {
	/**
	 * Parameters associated with the capability.
	 */
	parameters: {
		/**
		 * Available light scenes.
		 */
		options: {
			/**
			 * Name of the light scene.
			 */
			name: string;

			/**
			 * Identifiers of the parameter.
			 */
			value: {
				/**
				 * Unique identifier.
				 */
				id: number;
			};
		}[];
	};
};

/**
 * Power state of the device.
 */
export type OnOff = CapabilityBase<"powerSwitch", "devices.capabilities.on_off">;

/**
 * Base structure for all capability.
 */
type CapabilityBase<I extends string, T extends string> = {
	/**
	 * The instance that identifies the capability.
	 */
	instance: I;

	/**
	 * The type that identifies the capability.
	 */
	type: T;
};

/**
 * Identifies a capability.
 */
export type CapabilityIdentifier = ReduceIdentifiers<Capability>;

/**
 * Reduces {@template T} to the {@link CapabilityBase}, representing the {@link Capability} as identifiers.
 */
type ReduceIdentifiers<T> = T extends CapabilityBase<infer I, infer U> ? CapabilityBase<I, U> : never;

/**
 * A capability that defines functionality available to a Govee device.
 */
export type Capability = Brightness | Color | ColorTemperature | DIYScene | LightScene | OnOff;
