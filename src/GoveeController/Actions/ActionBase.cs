namespace GoveeController.Actions
{
    using GoveeController.Govee.Models;
    using GoveeController.Services;
    using SharpDeck;
    using SharpDeck.PropertyInspectors;
    using SharpDeck.PropertyInspectors.Payloads;

    /// <summary>
    /// Provides a base class that supports all actions.
    /// </summary>
    public abstract class ActionBase : StreamDeckAction
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ActionBase"/> class.
        /// </summary>
        /// <param name="goveeService">The Govee service.</param>
        /// <param name="command">The command this instance supports.</param>
        protected ActionBase(IGoveeService goveeService, CommandType command)
            : base()
        {
            this.Command = command;
            this.GoveeService = goveeService;
        }

        /// <summary>
        /// Gets the command this instance supports.
        /// </summary>
        protected virtual CommandType Command { get; }

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
                var supportedDevices = result
                    .Data
                    .Devices
                    .Where(d => d.IsControllable && d.SupportedCommands.Contains(this.Command))
                    .OrderBy(d => d.DeviceName);

                return new OptionsPayload(supportedDevices.Select(d => new Option(d.DeviceName, d.Device)));
            }
            else
            {
                return new OptionsPayload(new Option[] { new Option("Failed to load devices", string.Empty) });
            }
        }
    }
}
