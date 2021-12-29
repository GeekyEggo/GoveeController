namespace GoveeController.Serialization
{
    using System;
    using System.Linq;
    using System.Text.Json;
    using System.Text.Json.Nodes;
    using System.Text.Json.Serialization;

    /// <summary>
    /// Provides a partial implementation that converts an array of properties, to an object.
    /// </summary>
    /// <typeparam name="T">The type of object to convert to.</typeparam>
    public class PropertyArrayToObjectJsonConverter<T> : JsonConverter<T>
    {
        /// <inheritdoc/>
        public override T? Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            var jsonObj = JsonNode
                .Parse(ref reader)?
                .AsArray()?
                .Aggregate(new JsonObject(), (obj, node) =>
                {
                    if (node is JsonObject childObj)
                    {
                        var property = childObj.FirstOrDefault();
                        if (property.Value != null
                            && !(property.Value is JsonObject))
                        {
                            obj.Add(property.Key, JsonValue.Create(property.Value.GetValue<object>()));
                        }
                    }

                    return obj;
                });

            if (jsonObj == null)
            {
                return default;
            }

            var json = JsonSerializer.Serialize(jsonObj, options);
            return JsonSerializer.Deserialize<T?>(json, options);
        }

        /// <inheritdoc/>
        public override void Write(Utf8JsonWriter writer, T value, JsonSerializerOptions options)
            => throw new NotSupportedException();
    }
}
