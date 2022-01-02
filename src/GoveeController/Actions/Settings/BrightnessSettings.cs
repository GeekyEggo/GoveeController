namespace GoveeController.Actions.Settings
{
    /// <summary>
    /// Provides settings for <see cref="BrightnessAction"/>.
    /// </summary>
    public class BrightnessSettings
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
