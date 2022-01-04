namespace GoveeController.Services
{
    using GoveeController.Govee;
    using GoveeController.Govee.Models;
    using SharpDeck.Connectivity;

    /// <summary>
    /// Provides a service for controlling Govee devices, via a <see cref="IGoveeClient"/>.
    /// </summary>
    public class GoveeService : GoveeHttpClient, IGoveeService, IGoveeClient
    {
        /// <summary>
        /// The synchronization root.
        /// </summary>
        private readonly SemaphoreSlim _syncRoot = new SemaphoreSlim(1);

        /// <summary>
        /// Initializes a new instance of the <see cref="GoveeService"/> class.
        /// </summary>
        /// <param name="streamDeckConnection">The Stream Deck connection.</param>
        public GoveeService(IStreamDeckConnection streamDeckConnection)
            : base() => this.StreamDeckConnection = streamDeckConnection;

        /// <summary>
        /// Gets the Stream Deck connection.
        /// </summary>
        private IStreamDeckConnection StreamDeckConnection { get; }

        /// <summary>
        /// Gets or sets the device collection cache.
        /// </summary>
        private Response<DeviceCollection>? DeviceCollectionCache { get; set; }

        /// <inheritdoc />
        public override async Task<Response<DeviceCollection>> GetDevicesAsync(CancellationToken cancellationToken = default)
        {
            try
            {
                await this._syncRoot.WaitAsync(cancellationToken);
                if (this.DeviceCollectionCache != null)
                {
                    return this.DeviceCollectionCache;
                }

                var response = await base.GetDevicesAsync(cancellationToken);
                if (response.IsSuccess)
                {
                    this.DeviceCollectionCache = response;
                }

                return response;
            }
            finally
            {
                this._syncRoot.Release();
            }
        }

        /// <inheritdoc/>
        public async Task<Device> GetDeviceInfoAsync(string? deviceId, CancellationToken cancellationToken = default)
        {
            if (string.IsNullOrEmpty(deviceId))
            {
                throw new ArgumentNullException(nameof(deviceId), "Device identifier cannot be null.");
            }

            var devices = await this.GetDevicesAsync(cancellationToken);
            if (!devices.IsSuccess)
            {
                throw new Exception("Failed to load devices.");
            }

            var device = devices.Data.Devices.FirstOrDefault(d => d.Device == deviceId);
            if (device == null)
            {
                throw new KeyNotFoundException($"Unable to find device \"{deviceId}\".");
            }

            return device;
        }

        /// <inheritdoc/>
        public void InvalidateCache()
        {
            try
            {
                this._syncRoot.Wait();
                this.DeviceCollectionCache = null;
            }
            finally
            {
                this._syncRoot.Release();
            }
        }

        /// <inheritdoc/>
        public async ValueTask<ConnectionResponse> TryConnectAsync(CancellationToken cancellationToken = default)
        {
            var globalSettings = await this.StreamDeckConnection.GetGlobalSettingsAsync<Settings>(cancellationToken);
            return await this.TryConnectAsync(globalSettings.ApiKey, cancellationToken);
        }

        /// <inheritdoc/>
        public async ValueTask<ConnectionResponse> TryConnectAsync(string? apiKey, CancellationToken cancellationToken = default)
        {
            if (!string.IsNullOrWhiteSpace(apiKey))
            {
                try
                {
                    await this._syncRoot.WaitAsync(cancellationToken);

                    this.SetApiKey(apiKey);
                    this.DeviceCollectionCache = null;
                }
                finally
                {
                    this._syncRoot.Release();
                }

                var response = await this.GetDevicesAsync(cancellationToken);
                var settings = response.IsSuccess ? new Settings(true, apiKey) : new Settings(false);

                await this.StreamDeckConnection.SetGlobalSettingsAsync(settings, cancellationToken);
                return new ConnectionResponse(response.IsSuccess, response.Message);
            }
            else
            {
                await this.StreamDeckConnection.SetGlobalSettingsAsync(new Settings(false), cancellationToken);
                return new ConnectionResponse(false, "No API specified.");
            }
        }
    }

    /// <summary>
    /// Provides information about the response of an attempted connect to the Govee API.
    /// </summary>
    public record ConnectionResponse(bool IsSuccess, string? Message = default);

    /// <summary>
    /// Provides information about the global settings of the plugin.
    /// </summary>
    public record Settings(bool IsConnected = false, string? ApiKey = default);
}
