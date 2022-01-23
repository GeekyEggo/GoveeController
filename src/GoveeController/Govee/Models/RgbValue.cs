namespace GoveeController.Govee.Models
{
    using System.Text.Json.Serialization;

    /// <summary>
    /// Provides a value that represents a color.
    /// </summary>
    public class RgbValue
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RgbValue"/> class.
        /// </summary>
        /// <param name="red">The red value.</param>
        /// <param name="green">The green value.</param>
        /// <param name="blue">The blue value.</param>
        public RgbValue(int red, int green, int blue)
        {
            this.Red = red;
            this.Green = green;
            this.Blue = blue;
        }

        /// <summary>
        /// Gets or sets the red value.
        /// </summary>
        [JsonPropertyName("r")]
        public int Red { get; set; }

        /// <summary>
        /// Gets or sets the green value.
        /// </summary>
        [JsonPropertyName("g")]
        public int Green { get; set; }

        /// <summary>
        /// Gets or sets the blue value.
        /// </summary>
        [JsonPropertyName("b")]
        public int Blue { get; set; }
    }
}
