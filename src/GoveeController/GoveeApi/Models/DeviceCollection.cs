namespace GoveeController.GoveeApi.Models
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
        public Device[] Devices { get; set; } = Array.Empty<Device>();
    }
}
