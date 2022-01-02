namespace GoveeController.Actions.Settings
{
    /// <summary>
    /// Provides settings for turning a device on or off.
    /// </summary>
    public class TurnOnOffSettings
    {
        /// <summary>
        /// Gets or sets the device identifier.
        /// </summary>
        public string DeviceId { get; set; } = string.Empty;

        /// <summary>
        /// Gets or sets the operation to perform.
        /// </summary>
        public TurnOnOffOperation Operation { get; set; } = TurnOnOffOperation.Toggle;
    }
}
