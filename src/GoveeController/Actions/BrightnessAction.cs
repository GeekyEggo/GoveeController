namespace GoveeController.Actions
{
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
        public BrightnessAction(GoveeService goveeService)
            : base(goveeService, CommandType.Brightness)
        {
        }

        /// <inheritdoc/>
        protected override async Task OnKeyDown(ActionEventArgs<KeyPayload> args)
        {
            var settings = args.Payload.GetSettings<BrightnessSettings>();
            var device = await this.GoveeService.GetDeviceInfoAsync(settings.DeviceId);

            var response = await this.GoveeService.SetBrightnessAsync(device.Device, device.Model, settings.Brightness);
            await this.ShowResponseAsync(response);
        }
    }
}
