namespace GoveeController.Govee.Models
{
    /// <summary>
    /// Provides information capable of identifying a device.
    /// </summary>
    public class DeviceIdentifier
    {
        /// <summary>
        /// Gets or sets the MAC address of the device.
        /// </summary>
        public string Device { get; set; } = string.Empty;

        /// <summary>
        /// Gets or sets the model of the device.
        /// </summary>
        public string Model { get; set; } = string.Empty;
    }
}
