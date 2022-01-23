namespace GoveeController.Govee.Serialization
{
    using System.Text.Json;
    using System.Text.Json.Serialization;
    using GoveeController.Govee.Models;

    /// <summary>
    /// Provides a <see cref="JsonConverter{T}"/> capable of handling <see cref="CommandType"/>.
    /// </summary>
    public class CommandTypeJsonConverter : JsonConverter<CommandType>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CommandTypeJsonConverter"/> class.
        /// </summary>
        public CommandTypeJsonConverter()
        {
            void Add(CommandType type, string value)
            {
                this.WriterMap.Add(type, value);
                this.ReaderMap.Add(value, type);
            }

            Add(CommandType.Brightness, CommandNames.Brightness);
            Add(CommandType.Color, CommandNames.Color);
            Add(CommandType.ColorTemperature, CommandNames.ColorTemperature);
            Add(CommandType.TurnOnOff, CommandNames.Turn);
        }

        /// <summary>
        /// Gets the map from <see cref="CommandType"/> to <see cref="string"/>.
        /// </summary>
        private Dictionary<CommandType, string> WriterMap { get; } = new Dictionary<CommandType, string>();

        /// <summary>
        /// Gets the map from <see name="string"/> to <typeparamref name="CommandType"/>.
        /// </summary>
        private Dictionary<string, CommandType> ReaderMap { get; } = new Dictionary<string, CommandType>();

        /// <inheritdoc/>
        public override CommandType Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            var jsonValue = reader.GetString();
            return jsonValue != null && this.ReaderMap.TryGetValue(jsonValue, out var enumValue)
                ? enumValue
                : default;
        }

        /// <inheritdoc/>
        public override void Write(Utf8JsonWriter writer, CommandType value, JsonSerializerOptions options)
            => writer.WriteStringValue(this.WriterMap[value]);
    }
}