namespace GoveeController.Services
{
    using GoveeController.Govee;
    using GoveeController.Govee.Models;

    /// <summary>
    /// Provides a service for controlling Govee devices, via a <see cref="IGoveeClient"/>.
    /// </summary>
    public class GoveeService : IGoveeService
    {
        /// <summary>
        /// The synchronization root.
        /// </summary>
        private readonly SemaphoreSlim _syncRoot = new SemaphoreSlim(1);

        /// <summary>
        /// Initializes a new instance of the <see cref="GoveeService"/> class.
        /// </summary>
        /// <param name="client">The client.</param>
        public GoveeService(IGoveeClient client)
            => this.Client = client;

        /// <inheritdoc/>
        public IGoveeClient Client { get; }

        /// <summary>
        /// Gets or sets the device collection cache.
        /// </summary>
        private Response<DeviceCollection>? DeviceCollectionCache { get; set; }

        /// <inheritdoc/>
        public async Task<Response<DeviceCollection>> GetDevicesAsync(bool useCache = true, CancellationToken cancellationToken = default)
        {
            try
            {
                await this._syncRoot.WaitAsync(cancellationToken);
                if (useCache
                    && this.DeviceCollectionCache != null)
                {
                    return this.DeviceCollectionCache;
                }

                var response = await this.Client.GetDevicesAsync(cancellationToken);
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

            var devices = await this.GetDevicesAsync(useCache: true, cancellationToken: cancellationToken);
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
    }
}
