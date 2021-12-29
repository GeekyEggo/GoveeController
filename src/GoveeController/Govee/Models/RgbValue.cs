namespace GoveeController.Govee.Models
{
    using System.Text.Json.Serialization;

    /// <summary>
    /// Provides a value that represents a color.
    /// </summary>
    public record RgbValue(
        [property: JsonPropertyName("r")] int Red,
        [property: JsonPropertyName("g")] int Green,
        [property: JsonPropertyName("b")] int Blue);
}
