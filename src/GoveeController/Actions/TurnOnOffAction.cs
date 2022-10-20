namespace GoveeController.Actions
{
    /// <summary>
    /// Provides an action that is capable of controlling the on/off state of a device.
    /// </summary>
    [StreamDeckAction("com.geekyeggo.goveecontroller.turnonoff")]
    public class TurnOnOffAction : ActionBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TurnOnOffAction"/> class.
        /// </summary>
        /// <param name="goveeService">The Govee service.</param>
        public TurnOnOffAction(GoveeService goveeService)
            : base(goveeService, CommandType.TurnOnOff)
        {
        }

        /// <inheritdoc/>
        protected override async Task OnKeyDown(ActionEventArgs<KeyPayload> args)
        {
            // Get the settings, and attempt to get the device.
            var settings = args.Payload.GetSettings<TurnOnOffSettings>();
            var device = await this.GoveeService.GetDeviceInfoAsync(settings.DeviceId);

            // Determine the operation to perform.
            var turnOn = settings.Operation == TurnOnOffOperation.TurnOn;
            if (settings.Operation == TurnOnOffOperation.Toggle)
            {
                var state = await this.GoveeService.GetDeviceStateAsync(device.Device, device.Model);
                if (!state.IsSuccess)
                {
                    this.Logger.LogWarning("Failed to get state of device; {message}", state.Message);
                    await this.ShowAlertAsync();
                    return;
                }
                else if (state.Data.Properties?.IsOnline == false)
                {
                    this.Logger.LogInformation("Failed to get state of device; device is offline.");
                    await this.ShowAlertAsync();
                    return;
                }

                turnOn = state.Data.Properties?.IsTurnedOn == false;
            }

            // Change the state of the device.
            var response = await this.GoveeService.TurnOnOffAsync(device.Device, device.Model, turnOn);
            await this.ShowResponseAsync(response);
        }
    }
}
