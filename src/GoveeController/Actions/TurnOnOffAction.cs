namespace GoveeController.Actions
{
    using System.Threading.Tasks;
    using SharpDeck;
    using SharpDeck.Events.Received;

    /// <summary>
    /// Provides an action that is capable of controlling the on/off state of a device.
    /// </summary>
    [StreamDeckAction("com.geekyeggo.goveecontroller.turnonoff")]
    public class TurnOnOffAction : StreamDeckAction
    {
        /// <inheritdoc/>
        protected override Task OnKeyDown(ActionEventArgs<KeyPayload> args)
            => base.OnKeyDown(args);
    }
}
