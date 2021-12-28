namespace GoveeController.Actions
{
    using System.Threading.Tasks;
    using GoveeController.Govee;
    using SharpDeck;
    using SharpDeck.Events.Received;

    /// <summary>
    /// Provides an action that is capable of controlling the on/off state of a device.
    /// </summary>
    [StreamDeckAction("com.geekyeggo.goveecontroller.turnonoff")]
    public class TurnOnOffAction : ActionBase
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TurnOnOffAction"/> class.
        /// </summary>
        /// <param name="goveeClient">The Govee client.</param>
        public TurnOnOffAction(IGoveeClient goveeClient)
            : base(goveeClient)
        {
        }

        /// <inheritdoc/>
        protected override async Task OnKeyDown(ActionEventArgs<KeyPayload> args)
        {
            var devices = await this.GoveeClient.GetDevicesAsync();
            if (devices.Data?.Devices != null)
            {
                foreach (var device in devices.Data.Devices)
                {
                   await this.GoveeClient.TurnOnOffAsync(device.Device, device.Model, true);
                }
            }
        }
    }
}
