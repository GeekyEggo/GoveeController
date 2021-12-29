namespace GoveeController.Serialization
{
    using System.Reflection;
    using System.Runtime.Serialization;
    using System.Text.Json;
    using System.Text.Json.Serialization;

    /// <summary>
    /// Provides a <see cref="JsonConverter{T}"/> capable of handling <see cref="EnumMemberAttribute"/>.
    /// </summary>
    /// <typeparam name="TEnum">The type of the enum.</typeparam>
    public class EnumMemberJsonConverter<TEnum> : JsonConverter<TEnum>
        where TEnum : struct, Enum
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EnumMemberJsonConverter{TEnum}"/> class.
        /// </summary>
        public EnumMemberJsonConverter()
            : base()
        {
            var type = typeof(TEnum);

            foreach (var value in Enum.GetValues<TEnum>())
            {
                var jsonValue = type
                    .GetMember(value.ToString())[0]
                    .GetCustomAttribute<EnumMemberAttribute>()?
                    .Value ?? value.ToString();

                this.WriterMap.Add(value, jsonValue);
                this.ReaderMap.Add(jsonValue, value);
            }
        }

        /// <summary>
        /// Gets the map from <typeparamref name="TEnum"/> to <see cref="string"/>.
        /// </summary>
        private Dictionary<TEnum, string> WriterMap { get; } = new Dictionary<TEnum, string>();

        /// <summary>
        /// Gets the map from <see name="string"/> to <typeparamref name="TEnum"/>.
        /// </summary>
        private Dictionary<string, TEnum> ReaderMap { get; } = new Dictionary<string, TEnum>();

        /// <inheritdoc/>
        public override TEnum Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            var jsonValue = reader.GetString();
            return jsonValue != null && this.ReaderMap.TryGetValue(jsonValue, out var enumValue)
                ? enumValue
                : default;;
        }

        /// <inheritdoc/>
        public override void Write(Utf8JsonWriter writer, TEnum value, JsonSerializerOptions options)
            => writer.WriteStringValue(this.WriterMap[value]);
    }
}