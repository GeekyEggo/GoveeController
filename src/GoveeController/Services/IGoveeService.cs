namespace GoveeController.Services
{
    using System.Threading.Tasks;
    using GoveeController.Govee;
    using GoveeController.Govee.Models;

    /// <summary>
    /// Provides a service for controlling Govee devices, via a <see cref="IGoveeClient"/>.
    /// </summary>
    public interface IGoveeService : IGoveeClient
    {
        /// <summary>
        /// Gets the device information asynchronously.
        /// </summary>
        /// <param name="deviceId">The device identifier.</param>
        /// <param name="cancellationToken">The optional cancellation token.</param>
        /// <returns>The device information.</returns>
        Task<Device> GetDeviceInfoAsync(string? deviceId, CancellationToken cancellationToken = default);

        /// <summary>
        /// Invalidates the cache.
        /// </summary>
        void InvalidateCache();

        /// <summary>
        /// Attempts to connect to the Govee API using the API key stored in the global settings asynchronously.
        /// </summary>
        /// <param name="cancellationToken">The optional cancellation token.</param>
        /// <returns>The result of connecting to the Govee API.</returns>
        ValueTask<ConnectionResponse> TryConnectAsync(CancellationToken cancellationToken = default);

        /// <summary>
        /// Attempts to connect to the Govee API using the specified <paramref name="apiKey"/> asynchronously.
        /// </summary>
        /// <param name="apiKey">The API key.</param>
        /// <param name="cancellationToken">The optional cancellation token.</param>
        /// <returns>The result of connecting to the Govee API.</returns>
        ValueTask<ConnectionResponse> TryConnectAsync(string? apiKey, CancellationToken cancellationToken = default);
    }
}
