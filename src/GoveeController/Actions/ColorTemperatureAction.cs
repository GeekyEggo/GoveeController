namespace GoveeController.Actions
{
    using System.Diagnostics.CodeAnalysis;
    using System.Threading.Tasks;
    using GoveeController.Actions.Settings;
    using GoveeController.Govee.Models;
    using GoveeController.Services;
    using Microsoft.Extensions.Logging;
    using SharpDeck;
    using SharpDeck.Events.Received;

    /// <summary>
    /// Provides an action capable of setting the color temperature of a device.
    /// </summary>
    [StreamDeckAction("com.geekyeggo.goveecontroller.colortemperature")]
    public class ColorTemperatureAction : ActionBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ColorTemperatureAction"/> class.
        /// </summary>
        /// <param name="goveeService">The Govee service.</param>
        public ColorTemperatureAction(IGoveeService goveeService)
            : base(goveeService, CommandType.ColorTemperature)
        {
        }

        /// <inheritdoc/>
        protected override async Task OnKeyDown(ActionEventArgs<KeyPayload> args)
        {
            var settings = args.Payload.GetSettings<ColorTemperatureSettings>();
            var device = await this.GoveeService.GetDeviceInfoAsync(settings.DeviceId);

            if (TryGetColorTemperature(device, settings.Temperature, out var temperature))
            {
                var response = await this.GoveeService.SetColorTemperatureAsync(device.Device, device.Model, temperature);
                await this.ShowResponseAsync(response);
            }
            else
            {
                this.Logger.LogWarning("Failed to parse temperature or temperature was not in valid range.", settings.Temperature);
                await this.ShowAlertAsync();
            }
        }

        /// <summary>
        /// Attempts to get the desired color temperature based on the selected percentage, and the supported temperatures of the device.
        /// </summary>
        /// <param name="device">The device.</param>
        /// <param name="percentage">The percentage.</param>
        /// <param name="value">The temperature value.</param>
        /// <returns><c>true</c> when it was possible to retrieve the color temperature; otherwise <c>false</c>.</returns>
        private static bool TryGetColorTemperature(Device device, int percentage, [NotNullWhen(true)] out int value)
        {
            if (device.Properties?.ColorTemperature?.Range?.Min == null
                || device.Properties?.ColorTemperature?.Range?.Max == null)
            {
                value = default;
                return false;
            }

            value = (((device.Properties.ColorTemperature.Range.Max - device.Properties.ColorTemperature.Range.Min) / 100) * percentage) + device.Properties.ColorTemperature.Range.Min;
            return true;
        }
    }
}
