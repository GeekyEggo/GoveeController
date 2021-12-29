namespace GoveeController.Serialization
{
    using System;
    using System.Text.Json;
    using System.Text.Json.Serialization;

    /// <summary>
    /// Provides a <see cref="JsonConverter{bool}"/> that is capable of converting to/from the <see cref="string"/> "on" and "off".
    /// </summary>
    public class OnOffBooleanJsonConverter : JsonConverter<bool>
    {
        /// <summary>
        /// The <see cref="string"/> that represents <c>true</c>.
        /// </summary>
        public const string TRUE = "on";

        /// <summary>
        /// The <see cref="string"/> that represents <c>false</c>.
        /// </summary>
        public const string FALSE = "off";

        /// <inheritdoc/>
        public override bool Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
            => reader.GetString() == TRUE;

        /// <inheritdoc/>
        public override void Write(Utf8JsonWriter writer, bool value, JsonSerializerOptions options)
            => writer.WriteStringValue(value ? TRUE : FALSE);
    }
}
