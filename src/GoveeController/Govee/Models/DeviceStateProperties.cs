namespace GoveeController.Govee.Models
{
    /// <summary>
    /// Provides information about the state of a device.
    /// </summary>
    public class DeviceStateProperties
    {
        /// <summary>
        /// Gets or sets a value indicating whether this instance is online.
        /// </summary>
        public bool IsOnline { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether this instance is turned on.
        /// </summary>
        public bool IsTurnedOn { get; set; }

        /// <summary>
        /// Gets or sets the brightness.
        /// </summary>
        public int Brightness { get; set; }

        /// <summary>
        /// Gets or sets the color.
        /// </summary>
        public RgbValue? Color { get; set; }

        /// <summary>
        /// Gets or sets the color temperature.
        /// </summary>
        public int ColorTemperature { get; set; }
    }
}
