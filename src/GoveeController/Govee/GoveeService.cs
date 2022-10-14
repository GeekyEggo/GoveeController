namespace GoveeController.Govee
{
    using System.Net;
    using System.Net.Http;
    using System.Text.Json.Serialization.Metadata;

    /// <summary>
    /// Provides a service for controlling Govee devices, via a <see cref="IGoveeClient"/>.
    /// </summary>
    public class GoveeService : GoveeHttpClient
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
            StreamDeckConnection = streamDeckConnection;
            Logger = loggerFactory.CreateLogger<GoveeService>();
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

        /// <summary>
        /// Gets the device information asynchronously.
        /// </summary>
        /// <param name="deviceId">The device identifier.</param>
        /// <param name="cancellationToken">The optional cancellation token.</param>
        /// <returns>The device information.</returns>
        public override async Task<Response<DeviceCollection>> GetDevicesAsync(CancellationToken cancellationToken = default)
        {
            try
            {
                await _syncRoot.WaitAsync(cancellationToken);
                if (DeviceCollectionCache != null)
                {
                    return DeviceCollectionCache;
                }

                Logger.LogDebug("Getting devices from API.");
                var response = await base.GetDevicesAsync(cancellationToken);

                if (response.IsSuccess)
                {
                    Logger.LogDebug("Updated device list cache.");
                    DeviceCollectionCache = response;
                }

                return response;
            }
            finally
            {
                _syncRoot.Release();
            }
        }

        /// <summary>
        /// Gets the device information asynchronously.
        /// </summary>
        /// <param name="deviceId">The device identifier.</param>
        /// <param name="cancellationToken">The cancellation token.</param>
        /// <returns>The device information.</returns>
        public async Task<Device> GetDeviceInfoAsync(string? deviceId, CancellationToken cancellationToken = default)
        {
            if (string.IsNullOrEmpty(deviceId))
            {
                throw new ArgumentNullException(nameof(deviceId), "Device identifier cannot be null.");
            }

            var devices = await GetDevicesAsync(cancellationToken);
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

        /// <summary>
        /// Invalidates the cache.
        /// </summary>
        public void InvalidateCache()
        {
            try
            {
                _syncRoot.Wait();

                Logger.LogDebug("Invalidating device cache.");
                DeviceCollectionCache = null;
            }
            finally
            {
                _syncRoot.Release();
            }
        }

        /// <summary>
        /// Attempts to connect to the Govee API using the API key stored in the global settings asynchronously.
        /// </summary>
        /// <param name="cancellationToken">The optional cancellation token.</param>
        /// <returns>The result of connecting to the Govee API.</returns>
        public async ValueTask<ConnectionResponse> TryConnectAsync(CancellationToken cancellationToken = default)
        {
            var globalSettings = await StreamDeckConnection.GetGlobalSettingsAsync<Settings>(cancellationToken);

            if (string.IsNullOrWhiteSpace(globalSettings.ApiKey))
            {
                await StreamDeckConnection.SetGlobalSettingsAsync(new Settings(false), cancellationToken);
                return new ConnectionResponse(false, "API key is not defined in global settings");
            }

            return await TryConnectAsync(globalSettings.ApiKey, cancellationToken);
        }

        /// <summary>
        /// Attempts to connect to the Govee API using the specified <paramref name="apiKey"/> asynchronously.
        /// </summary>
        /// <param name="apiKey">The API key.</param>
        /// <param name="cancellationToken">The optional cancellation token.</param>
        /// <returns>The result of connecting to the Govee API.</returns>
        public async ValueTask<ConnectionResponse> TryConnectAsync(string? apiKey, CancellationToken cancellationToken = default)
        {
            if (string.IsNullOrWhiteSpace(apiKey))
            {
                return new ConnectionResponse(false, "API key is null or undefined");
            }

            try
            {
                await _syncRoot.WaitAsync(cancellationToken);

                SetApiKey(apiKey);
                DeviceCollectionCache = null;
            }
            finally
            {
                _syncRoot.Release();
            }

            var response = await GetDevicesAsync(cancellationToken);
            if (response.IsSuccess)
            {
                await StreamDeckConnection.SetGlobalSettingsAsync(new Settings(true, apiKey), cancellationToken);
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
                Logger.LogInformation($"Request contains bad API key, reseting global settings.");
                await StreamDeckConnection.SetGlobalSettingsAsync(new Settings(false), cancellationToken);
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
