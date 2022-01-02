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
    [StreamDeckAction("com.geekyeggo.goveecontroller.setbrightness")]
    public class SetBrightnessAction : ActionBase<SetBrightnessSettings>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SetBrightnessAction"/> class.
        /// </summary>
        /// <param name="goveeService">The Govee service.</param>
        public SetBrightnessAction(IGoveeService goveeService)
            : base(goveeService, CommandType.Brightness)
        {
        }

        /// <inheritdoc/>
        protected override async Task OnKeyDown(ActionEventArgs<KeyPayload> args)
        {
            var settings = args.Payload.GetSettings<SetBrightnessSettings>();
            var device = await this.GoveeService.GetDeviceInfoAsync(settings.DeviceId);

            await this.GoveeService.Client.SetBrightnessAsync(device.Device, device.Model, settings.Brightness);
        }
    }
}
