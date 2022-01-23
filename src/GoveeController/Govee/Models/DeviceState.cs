namespace GoveeController.Govee.Models
{
    using System.Text.Json.Serialization;
    using GoveeController.Govee.Serialization;

    /// <summary>
    /// Provides information about the state of a device.
    /// </summary>
    public class DeviceState : DeviceIdentifier
    {
        /// <summary>
        /// Gets or sets the properties that represent the state of the device..
        /// </summary>
        [JsonConverter(typeof(DeviceStatePropertiesJsonConverter))]
        public DeviceStateProperties? Properties { get; set; }
    }
}
