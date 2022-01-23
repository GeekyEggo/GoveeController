namespace GoveeController.Govee.Models
{
    /// <summary>
    /// Provides information about a devices color temperature properties.
    /// </summary>
    public class ColorTemperature
    {
        /// <summary>
        /// Gets or sets the range of the color temperature.
        /// </summary>
        public Range Range { get; set; } = new Range();
    }
}
