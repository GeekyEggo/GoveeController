namespace GoveeController.Govee
{
    using System.Text.Json.Serialization;
    using GoveeController.Govee.Models;

    /// <summary>
    /// Provides meta data and source generation for JSON objects.
    /// </summary>
    [JsonSourceGenerationOptions(
        PropertyNamingPolicy = JsonKnownNamingPolicy.CamelCase,
        WriteIndented = false)]
    [JsonSerializable(typeof(Response))]
    [JsonSerializable(typeof(Response<DeviceCollection>))]
    [JsonSerializable(typeof(Response<DeviceState>))]
    [JsonSerializable(typeof(ControlPayload<int>))]
    [JsonSerializable(typeof(ControlPayload<string>))]
    [JsonSerializable(typeof(ControlPayload<RgbValue>))]
    internal partial class GoveeJsonContext : JsonSerializerContext
    {
    }
}
