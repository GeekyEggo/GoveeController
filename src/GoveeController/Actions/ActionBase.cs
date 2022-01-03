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
        /// Connects to the Govee API asynchronously.
        /// </summary>
        /// <param name="apiKey">The API key.</param>
        [PropertyInspectorMethod]
        public async Task<GoveeSetupPayload> ConnectAsync(string apiKey)
        {
            try
            {
                this.GoveeService.Client.SetApiKey(apiKey);
                var response = await this.GoveeService.GetDevicesAsync(useCache: false);

                return new GoveeSetupPayload(response.IsSuccess, response.Message);
            }
            catch
            {
                return new GoveeSetupPayload(false, "Failed to connect, please try again.");
            }
        }

        /// <summary>
        /// Gets the devices asynchronously.
        /// </summary>
        /// <returns>The devices mapped to options.</returns>
        [PropertyInspectorMethod]
        public Task<Option[]> GetDevicesAsync()
            => this.GetDevicesAsync(useCache: true);

        /// <summary>
        /// Reloads the list of devices asynchronously.
        /// </summary>
        /// <returns>The devices mapped to options.</returns>
        [PropertyInspectorMethod]
        public Task<Option[]> ReloadDevicesAsync()
            => this.GetDevicesAsync(useCache: false);

        /// <summary>
        /// Gets the devices, and maps them to <see cref="Option"/> asynchronously.
        /// </summary>
        /// <param name="useCache">Determines whether the cache of devices can be used.</param>
        /// <returns>The devices mapped to options.</returns>
        private async Task<Option[]> GetDevicesAsync(bool useCache)
        {
            var result = await this.GoveeService.GetDevicesAsync(useCache);
            if (result.IsSuccess)
            {
                var supportedDevices = result
                    .Data
                    .Devices
                    .Where(d => d.IsControllable && d.SupportedCommands.Contains(this.Command))
                    .OrderBy(d => d.DeviceName);

                return supportedDevices.Select(d => new Option(d.DeviceName, d.Device)).ToArray();
            }
            else
            {
                return new [] { new Option(result.Message ?? "Failed to load devices", string.Empty) };
            }
        }
    }

    /// <summary>
    /// Provides a payload that details the result of setting up Govee.
    /// </summary>
    public record GoveeSetupPayload(bool IsSuccess = false, string? Message = null);
}
