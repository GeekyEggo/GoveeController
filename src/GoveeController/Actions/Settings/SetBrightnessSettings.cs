namespace GoveeController.Actions.Settings
{
    /// <summary>
    /// Provides settings for <see cref="SetBrightnessAction"/>.
    /// </summary>
    public class SetBrightnessSettings
    {
        /// <summary>
        /// Gets or sets the device identifier.
        /// </summary>
        public string? DeviceId { get; set; }

        /// <summary>
        /// Gets or sets the brightness.
        /// </summary>
        public int Brightness { get; set; }
    }
}
