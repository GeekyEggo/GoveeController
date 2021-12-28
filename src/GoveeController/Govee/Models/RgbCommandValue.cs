namespace GoveeController.Govee.Models
{
    using System.Text.Json.Serialization;

    /// <summary>
    /// Provides a value of a color command.
    /// </summary>
    public record RgbCommandValue(
        [property: JsonPropertyName("r")] int Red,
        [property: JsonPropertyName("g")] int Green,
        [property: JsonPropertyName("b")] int Blue);
}
