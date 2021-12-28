namespace GoveeController.Govee.Models
{
    using System;

    /// <summary>
    /// Provides a collection of devices.
    /// </summary>
    public class DeviceCollection
    {
        /// <summary>
        /// Gets or sets the devices.
        /// </summary>
        public DeviceInfo[] Devices { get; set; } = Array.Empty<DeviceInfo>();
    }
}
