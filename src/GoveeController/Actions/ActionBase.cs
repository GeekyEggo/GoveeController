namespace GoveeController.Actions
{
    using GoveeController.Govee;
    using SharpDeck;

    /// <summary>
    /// Provides a base class that supports all actions.
    /// </summary>
    public abstract class ActionBase : StreamDeckAction
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ActionBase"/> class.
        /// </summary>
        /// <param name="goveeClient">The Govee client.</param>
        protected ActionBase(IGoveeClient goveeClient)
            => this.GoveeClient = goveeClient;

        /// <summary>
        /// Gets the Govee client used to interact with devices.
        /// </summary>
        protected IGoveeClient GoveeClient { get; }
    }
}
