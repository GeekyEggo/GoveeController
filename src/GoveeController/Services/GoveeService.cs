namespace GoveeController.Services
{
    using System.Net;
    using System.Net.Http;
    using System.Text.Json.Serialization.Metadata;
    using GoveeController.Govee;
    using GoveeController.Govee.Models;
    using Microsoft.Extensions.Logging;
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
        public GoveeService(IStreamDeckConnection streamDeckConnection, ILoggerFactory loggerFactory)
            : base(loggerFactory.CreateLogger<GoveeHttpClient>())
        {
            this.StreamDeckConnection = streamDeckConnection;
            this.Logger = loggerFactory.CreateLogger<GoveeService>();
        }

        /// <summary>
        /// Gets the Stream Deck connection.
        /// </summary>
        private IStreamDeckConnection StreamDeckConnection { get; }

        /// <summary>
        /// Gets or sets the device collection cache.
        /// </summary>
        private Response<DeviceCollection>? DeviceCollectionCache { get; set; }

        /// <summary>
        /// Gets the logger.
        /// </summary>
        private ILogger Logger { get; }

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

                this.Logger.LogDebug("Getting devices from API.");
                var response = await base.GetDevicesAsync(cancellationToken);

                if (response.IsSuccess)
                {
                    this.Logger.LogDebug("Updated device list cache.");
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

                this.Logger.LogDebug("Invalidating device cache.");
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

            if (string.IsNullOrWhiteSpace(globalSettings.ApiKey))
            {
                await this.StreamDeckConnection.SetGlobalSettingsAsync(new Settings(false), cancellationToken);
                return new ConnectionResponse(false, "API key is not defined in global settings");
            }

            return await this.TryConnectAsync(globalSettings.ApiKey, cancellationToken);
        }

        /// <inheritdoc/>
        public async ValueTask<ConnectionResponse> TryConnectAsync(string? apiKey, CancellationToken cancellationToken = default)
        {
            if (string.IsNullOrWhiteSpace(apiKey))
            {
                return new ConnectionResponse(false, "API key is null or undefined");
            }

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
            if (response.IsSuccess)
            {
                await this.StreamDeckConnection.SetGlobalSettingsAsync(new Settings(true, apiKey), cancellationToken);
            }

            return new ConnectionResponse(response.IsSuccess, response.Message);
        }

        /// <inheritdoc/>
        protected override async Task<TResponse> SendAsync<TResponse>(HttpRequestMessage request, JsonTypeInfo<TResponse> jsonTypeInfo, CancellationToken cancellationToken = default)
        {
            var response = await base.SendAsync(request, jsonTypeInfo, cancellationToken);

            // When the request failed due to an API key problem, set the global settings to represent the failure.
            if (response.StatusCode == HttpStatusCode.Unauthorized
                || response.StatusCode == HttpStatusCode.Forbidden)
            {
                this.Logger.LogInformation($"Request contains bad API key, reseting global settings.");
                await this.StreamDeckConnection.SetGlobalSettingsAsync(new Settings(false), cancellationToken);
            }

            return response;
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
