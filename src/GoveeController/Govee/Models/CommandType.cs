namespace GoveeController.Govee.Models
{
    using System.Text.Json.Serialization;
    using GoveeController.Govee.Serialization;

    /// <summary>
    /// Provides an enumeration of possible commands for a device.
    /// </summary>
    [JsonConverter(typeof(CommandTypeJsonConverter))]
    public enum CommandType
    {
        /// <summary>
        /// The device can be turned on / off.
        /// </summary>
        TurnOnOff = 0,

        /// <summary>
        /// The brightness can be controlled.
        /// </summary>
        Brightness = 1,

        /// <summary>
        /// The color can be set.
        /// </summary>
        Color = 2,

        /// <summary>
        /// The color temperature can be set.
        /// </summary>
        ColorTemperature = 3
    }
}
