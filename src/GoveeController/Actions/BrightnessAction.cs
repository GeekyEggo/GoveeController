namespace GoveeController.Actions
{
    using System.Threading.Tasks;
    using GoveeController.Actions.Settings;
    using GoveeController.Govee.Models;
    using GoveeController.Services;
    using SharpDeck;
    using SharpDeck.Events.Received;

    /// <summary>
    /// Provides an action that is capable of setting the brightness of a device.
    /// </summary>
    [StreamDeckAction("com.geekyeggo.goveecontroller.brightness")]
    public class BrightnessAction : ActionBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="BrightnessAction"/> class.
        /// </summary>
        /// <param name="goveeService">The Govee service.</param>
        public BrightnessAction(IGoveeService goveeService)
            : base(goveeService, CommandType.Brightness)
        {
        }

        /// <inheritdoc/>
        protected override async Task OnKeyDown(ActionEventArgs<KeyPayload> args)
        {
            var settings = args.Payload.GetSettings<BrightnessSettings>();
            var device = await this.GoveeService.GetDeviceInfoAsync(settings.DeviceId);

            await this.GoveeService.SetBrightnessAsync(device.Device, device.Model, settings.Brightness);
            await this.ShowOkAsync();
        }
    }
}
