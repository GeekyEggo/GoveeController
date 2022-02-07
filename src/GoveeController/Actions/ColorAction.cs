namespace GoveeController.Actions
{
    using System.Diagnostics.CodeAnalysis;
    using System.Drawing;
    using System.Threading.Tasks;
    using GoveeController.Actions.Settings;
    using GoveeController.Govee.Models;
    using GoveeController.Services;
    using Microsoft.Extensions.Logging;
    using SharpDeck;
    using SharpDeck.Events.Received;

    /// <summary>
    /// Provides an action capable of setting the color of a device.
    /// </summary>
    [StreamDeckAction("com.geekyeggo.goveecontroller.color")]
    public class ColorAction : ActionBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ColorAction"/> class.
        /// </summary>
        /// <param name="goveeService">The Govee service.</param>
        public ColorAction(IGoveeService goveeService)
            : base(goveeService, CommandType.Color)
        {
        }

        /// <inheritdoc/>
        protected override async Task OnKeyDown(ActionEventArgs<KeyPayload> args)
        {
            var settings = args.Payload.GetSettings<ColorSettings>();
            var device = await this.GoveeService.GetDeviceInfoAsync(settings.DeviceId);

            if (TryParseColor(settings.Color, out var color))
            {
                var response = await this.GoveeService.SetColorAsync(device.Device, device.Model, color.R, color.G, color.B);
                await this.ShowResponseAsync(response);
            }
            else
            {
                this.Logger.LogWarning("Failed to parse color; {color}", settings.Color);
                await this.ShowAlertAsync();
            }
        }

        /// <summary>
        /// Tries to parse the color from the specified <paramref name="hex"/>.
        /// </summary>
        /// <param name="hex">The hexadecimal value that represents the color.</param>
        /// <param name="value">The result of parsing the hexadecimal value.</param>
        /// <returns><c>true</c> when the color was parsed; otherwise <c>false</c>.</returns>
        private static bool TryParseColor(string? hex, [NotNullWhen(true)] out Color value)
        {
            if (string.IsNullOrWhiteSpace(hex))
            {
                value = Color.White;
                return false;
            }

            try
            {
                value = ColorTranslator.FromHtml(hex);
                return true;
            }
            catch
            {
                value = Color.White;
            }

            return false;
        }
    }
}
