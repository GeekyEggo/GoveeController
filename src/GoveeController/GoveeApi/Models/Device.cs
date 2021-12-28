namespace GoveeController.GoveeApi.Models
{
    using System.Text.Json.Serialization;

    /// <summary>
    /// Provides information about a device.
    /// </summary>
    public class Device
    {
        /// <summary>
        /// Gets or sets the MAC address of the device. Use <see cref="Id"/> and <see cref="Model"/> to identify the target device.
        /// </summary>
        [JsonPropertyName("device")]
        public string Id { get; set; } = string.Empty;

        /// <summary>
        /// Gets or sets the model of the device.
        /// </summary>
        public string Model { get; set; } = string.Empty;

        /// <summary>
        /// Gets or sets the name of the device.
        /// </summary>
        public string DeviceName { get; set; } = string.Empty;

        /// <summary>
        /// Gets or sets a value indicating whether this device is controllable; <c>true</c> when the device support commands to control.
        /// </summary>
        [JsonPropertyName("controllable")]
        public bool IsControllable { get; set; } = false;

        /// <summary>
        /// Gets or sets a value indicating whether this device supports querying the current device state.
        /// </summary>
        [JsonPropertyName("retrievable")]
        public bool IsRetrievable { get; set; } = false;

        /// <summary>
        /// Gets or sets the commands supported by this device.
        /// </summary>
        [JsonPropertyName("supportCmds")]
        public CommandType[] SupportedCommands { get; set; } = Array.Empty<CommandType>();

        /// <summary>
        /// Gets or sets the properties.
        /// </summary>
        public object? Properties { get; set; }
    }
}
