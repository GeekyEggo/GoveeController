namespace GoveeController.Govee.Serialization
{
    using System;
    using System.Text.Json;
    using System.Text.Json.Serialization;
    using GoveeController.Govee;
    using GoveeController.Govee.Models;

    /// <summary>
    /// Provides a <see cref="JsonConverter"/> capable of reading JSON to <see cref="DeviceStateProperties"/>.
    /// </summary>
    public class DeviceStatePropertiesJsonConverter : JsonConverter<DeviceStateProperties>
    {
        /// <inheritdoc/>
        public override DeviceStateProperties? Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            if (!JsonDocument.TryParseValue(ref reader, out var document)
                || document.RootElement.ValueKind != JsonValueKind.Array)
            {
                return null;
            }

            var result = new DeviceStateProperties();
            foreach (var item in document.RootElement.EnumerateArray().Where(item => item.ValueKind == JsonValueKind.Object))
            {
                foreach (var property in item.EnumerateObject())
                {
                    switch (property.Name)
                    {
                        case "online":
                            result.IsOnline = property.Value.ValueKind == JsonValueKind.String
                                ? property.Value.GetString()?.Equals("true", StringComparison.OrdinalIgnoreCase) == true
                                : property.Value.Deserialize(GoveeJsonContext.Default.Boolean);
                            break;

                        case "powerState":
                            result.IsTurnedOn = property.Value.GetString() == OnOffBooleanJsonConverter.TRUE;
                            break;

                        case "brightness":
                            result.Brightness = property.Value.GetInt32();
                            break;

                        case "color":
                            result.Color = property.Value.Deserialize(GoveeJsonContext.Default.RgbValue);
                            break;

                        case "colorTem":
                            result.ColorTemperature = property.Value.GetInt32();
                            break;
                    }
                }
            }

            return result;
        }

        /// <inheritdoc/>
        public override void Write(Utf8JsonWriter writer, DeviceStateProperties value, JsonSerializerOptions options)
            => throw new NotImplementedException();
    }
}
