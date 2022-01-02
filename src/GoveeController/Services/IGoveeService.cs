namespace GoveeController.Services
{
    using System.Threading.Tasks;
    using GoveeController.Govee;
    using GoveeController.Govee.Models;

    /// <summary>
    /// Provides a service for controlling Govee devices, via a <see cref="IGoveeClient"/>.
    /// </summary>
    public interface IGoveeService
    {
        /// <summary>
        /// Gets the client used to communicate with Govee.
        /// </summary>
        public IGoveeClient Client { get; }

        /// <summary>
        /// Gets the devices asynchronously.
        /// </summary>
        /// <param name="useCache">Determines whether the local cache can be used when selecting devices.</param>
        /// <param name="cancellationToken">The optional cancellation token.</param>
        /// <returns>The devices.</returns>
        Task<Response<DeviceCollection>> GetDevicesAsync(bool useCache = true, CancellationToken cancellationToken = default);

        /// <summary>
        /// Gets the device information asynchronously.
        /// </summary>
        /// <param name="deviceId">The device identifier.</param>
        /// <param name="cancellationToken">The optional cancellation token.</param>
        /// <returns>The device information.</returns>
        Task<DeviceInfo> GetDeviceInfoAsync(string deviceId, CancellationToken cancellationToken = default);
    }
}
