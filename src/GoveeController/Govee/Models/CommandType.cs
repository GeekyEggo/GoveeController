namespace GoveeController.Govee.Models
{
    using System.Runtime.Serialization;
    using System.Text.Json.Serialization;
    using GoveeController.Serialization;

    /// <summary>
    /// Provides an enumeration of possible commands for a device.
    /// </summary>
    [JsonConverter(typeof(EnumMemberJsonConverter<CommandType>))]
    public enum CommandType
    {
        /// <summary>
        /// The device can be turned on / off.
        /// </summary>
        [EnumMember(Value = CommandNames.Turn)]
        TurnOnOff = 0,

        /// <summary>
        /// The brightness can be controlled.
        /// </summary>
        [EnumMember(Value = CommandNames.Brightness)]
        Brightness = 1,

        /// <summary>
        /// The color can be set.
        /// </summary>
        [EnumMember(Value = CommandNames.Color)]
        Color = 2,

        /// <summary>
        /// The color temperature can be set.
        /// </summary>
        [EnumMember(Value = CommandNames.ColorTemperature)]
        ColorTemperature = 3
    }
}
