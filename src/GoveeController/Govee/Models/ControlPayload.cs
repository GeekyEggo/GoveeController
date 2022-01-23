namespace GoveeController.Govee.Models
{
    using System.Text.Json.Serialization;

    /// <summary>
    /// Provides a payload that allows for controlling a Govee device.
    /// </summary>
    /// <typeparam name="TCommandValue">The type of the <see cref="Command.Value"/>.</typeparam>
    public class ControlPayload<TCommandValue> : DeviceIdentifier
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ControlPayload"/> class.
        /// </summary>
        /// <param name="device">The device MAC address.</param>
        /// <param name="model">The model of the device.</param>
        /// <param name="commandName">The name of the command.</param>
        /// <param name="commandValue">The value of the command.</param>
        public ControlPayload(string device, string model, string commandName, TCommandValue commandValue)
        {
            this.Device = device;
            this.Model = model;
            this.Command = new Command<TCommandValue>(commandName, commandValue);
        }

        /// <summary>
        /// Gets or sets the command.
        /// </summary>
        [JsonPropertyName("cmd")]
        public Command<TCommandValue> Command { get; set; }
    }
}
