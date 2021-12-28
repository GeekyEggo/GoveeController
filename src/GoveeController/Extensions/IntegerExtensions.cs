namespace GoveeController.Extensions
{
    using System;

    /// <summary>
    /// Provides extension methods for <see cref="int"/>.
    /// </summary>
    public static class IntegerExtensions
    {
        /// <summary>
        /// Ensures the <paramref name="value"/> is within range of the inclusive <paramref name="min"/> and <paramref name="max"/>.
        /// </summary>
        /// <param name="value">The value.</param>
        /// <param name="min">The inclusive minimum.</param>
        /// <param name="max">The inclusive maximum.</param>
        /// <returns>The <paramref name="value"/> within range.</returns>
        public static int InRangeOf(this int value, int min, int max)
            => Math.Max(min, Math.Min(max, value));

        /// <summary>
        /// Ensures the <paramref name="value"/> is within range of a color value, i.e. 0-255.
        /// </summary>
        /// <param name="value">The value.</param>
        /// <returns>The <paramref name="value"/> within range of a color value.</returns>
        public static int InColorRange(this int value)
            => value.InRangeOf(0, 255);
    }
}
