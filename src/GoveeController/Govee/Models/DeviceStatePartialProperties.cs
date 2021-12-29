namespace GoveeController.Govee.Models
{
    using System.Text.Json.Serialization;
    using GoveeController.Serialization;

    /// <summary>
    /// Provides information about the state of a device.
    /// </summary>
    public class DeviceStatePartialProperties
    {
        /// <summary>
        /// Gets or sets a value indicating whether this instance is online.
        /// </summary>
        [JsonPropertyName("online")]
        public bool IsOnline { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether this instance is turned on.
        /// </summary>
        [JsonPropertyName("powerState")]
        [JsonConverter(typeof(OnOffBooleanJsonConverter))]
        public bool IsTurnedOn { get; set; }
    }
}
