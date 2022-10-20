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
        /// Initializes a new instance of the <see cref="GoveeService" /> class.
        /// </summary>
        /// <param name="authorizationProvider">The authorization provider.</param>
        /// <param name="httpClientFactory">The HTTP client factory.</param>
        /// <param name="loggerFactory">The logger factory.</param>
        public GoveeService(AuthorizationProvider authorizationProvider, IHttpClientFactory httpClientFactory, ILoggerFactory loggerFactory)
            : base(authorizationProvider, httpClientFactory, loggerFactory)
            => this.Logger = loggerFactory.CreateLogger<GoveeService>();

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
            await _syncRoot.WaitAsync(cancellationToken);

            try
            {
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

        /// <summary>
        /// Invalidates the cache.
        /// </summary>
        public void InvalidateCache()
        {
            _syncRoot.Wait();

            try
            {
                this.InvalidateCacheInternal();
            }
            finally
            {
                _syncRoot.Release();
            }
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

            await _syncRoot.WaitAsync(cancellationToken);

            try
            {
                await this.AuthorizationProvider.SetAuthorizationAsync(apiKey, cancellationToken);
                this.DeviceCollectionCache = null;
            }
            finally
            {
                _syncRoot.Release();
            }

            var response = await this.GetDevicesAsync(cancellationToken);
            return new ConnectionResponse(response.IsSuccess, response.Message);
        }

        /// <inheritdoc/>
        protected override async Task<TResponse> SendAsync<TResponse>(HttpRequestMessage request, JsonTypeInfo<TResponse> jsonTypeInfo, CancellationToken cancellationToken = default)
        {
            var response = await base.SendAsync(request, jsonTypeInfo, cancellationToken);

            // When the request failed due to an API key problem, set the global settings to represent the failure.
            if (response.StatusCode is HttpStatusCode.Unauthorized or HttpStatusCode.Forbidden)
            {
                this.Logger.LogInformation($"Request contains bad API key, reseting authorization.");

                await this.AuthorizationProvider.SetAuthorizationAsync(cancellationToken: cancellationToken);
                this.InvalidateCacheInternal();
            }

            return response;
        }

        /// <summary>
        /// Invalidates the <see cref="DeviceCollection"/>.
        /// </summary>
        private void InvalidateCacheInternal()
        {
            this.Logger.LogDebug("Invalidating device cache.");
            this.DeviceCollectionCache = null;
        }
    }

    /// <summary>
    /// Provides information about the response of an attempted connect to the Govee API.
    /// </summary>
    public record ConnectionResponse(bool IsSuccess, string? Message = default);
}
