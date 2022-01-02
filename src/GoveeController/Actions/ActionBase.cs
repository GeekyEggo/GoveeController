namespace GoveeController.Actions
{
    using GoveeController.Services;
    using SharpDeck;
    using SharpDeck.PropertyInspectors;
    using SharpDeck.PropertyInspectors.Payloads;

    /// <summary>
    /// Provides a base class that supports all actions.
    /// </summary>
    public abstract class ActionBase<TSettings> : StreamDeckAction<TSettings>
        where TSettings: class
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ActionBase"/> class.
        /// </summary>
        /// <param name="goveeService">The Govee service.</param>
        protected ActionBase(IGoveeService goveeService)
            => this.GoveeService = goveeService;

        /// <summary>
        /// Gets the Govee service used to interact with devices.
        /// </summary>
        protected IGoveeService GoveeService { get; }

        /// <summary>
        /// Gets the devices asynchronously.
        /// </summary>
        /// <returns>The devices mapped to options.</returns>
        [PropertyInspectorMethod]
        public Task<OptionsPayload> GetDevicesAsync()
            => this.GetDevicesAsync(useCache: true);

        /// <summary>
        /// Reloads the list of devices asynchronously.
        /// </summary>
        /// <returns>The devices mapped to options.</returns>
        [PropertyInspectorMethod]
        public Task<OptionsPayload> ReloadDevicesAsync()
            => this.GetDevicesAsync(useCache: false);

        /// <summary>
        /// Gets the devices, and maps them to <see cref="Option"/> asynchronously.
        /// </summary>
        /// <param name="useCache">Determines whether the cache of devices can be used.</param>
        /// <returns>The devices mapped to options.</returns>
        private async Task<OptionsPayload> GetDevicesAsync(bool useCache)
        {
            var result = await this.GoveeService.GetDevicesAsync(useCache);
            if (result.IsSuccess)
            {
                return new OptionsPayload(
                    result.Data
                    .Devices
                    .Where(d => d.IsControllable)
                    .OrderBy(d => d.DeviceName)
                    .Select(d => new Option(d.DeviceName, d.Device)));
            }
            else
            {
                return new OptionsPayload(new Option[] { new Option("Failed to load devices", string.Empty) });
            }
        }
    }
}
