namespace GoveeController.Govee.Models
{
    using System.Text.Json.Serialization;

    /// <summary>
    /// Provides additional information about a device.
    /// </summary>
    public class DeviceProperties
    {
        /// <summary>
        /// Gets or sets the color temperature information.
        /// </summary>
        [JsonPropertyName("colorTem")]
        public ColorTemperature? ColorTemperature { get; set; }
    }
}
