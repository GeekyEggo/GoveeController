namespace GoveeController.Actions.Settings
{
    using GoveeController.Actions;

    /// <summary>
    /// Provides settings for <see cref="ColorTemperatureAction"/>.
    /// </summary>
    public class ColorTemperatureSettings
    {
        /// <summary>
        /// Gets or sets the device identifier.
        /// </summary>
        public string? DeviceId { get; set; }

        /// <summary>
        /// Gets or sets the color temperature.
        /// </summary>
        public int Temperature { get; set; }
    }
}
