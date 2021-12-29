namespace GoveeController.Govee
{
    using GoveeController.Govee.Models;

    /// <summary>
    /// Provides methods for controlling Govee devices.
    /// </summary>
    public interface IGoveeClient
    {
        /// <summary>
        /// Sets the API key.
        /// </summary>
        /// <param name="key">The API key.</param>
        void SetApiKey(string key);

        /// <summary>
        /// Gets the devices asynchronously.
        /// </summary>
        /// <param name="cancellationToken">The optional cancellation token.</param>
        /// <returns>The response that contains the devices.</returns>
        Task<Response<DeviceCollection>> GetDevicesAsync(CancellationToken cancellationToken = default);

        /// <summary>
        /// Gets the state of the device asynchronously.
        /// </summary>
        /// <param name="device">The device.</param>
        /// <param name="model">The model.</param>
        /// <param name="cancellationToken">The optional cancellation token.</param>
        /// <returns>The response containing the state of the device.</returns>
        Task<Response<DeviceState>> GetDeviceStateAsync(string device, string model, CancellationToken cancellationToken = default);

        /// <summary>
        /// Sets the brightness of the device asynchronously.
        /// </summary>
        /// <param name="device">The device.</param>
        /// <param name="model">The model.</param>
        /// <param name="brightness">The brightness.</param>
        /// <param name="cancellationToken">The optional cancellation token.</param>
        /// <returns>The response indicating the success of setting the brightness.</returns>
        Task<Response> SetBrightnessAsync(string device, string model, int brightness, CancellationToken cancellationToken = default);

        /// <summary>
        /// Sets the color of the device asynchronously.
        /// </summary>
        /// <param name="device">The device.</param>
        /// <param name="model">The model.</param>
        /// <param name="red">The red value.</param>
        /// <param name="green">The green value.</param>
        /// <param name="blue">The blue value.</param>
        /// <param name="cancellationToken">The optional cancellation token.</param>
        /// <returns>The response indicating the success of setting the color.</returns>
        Task<Response> SetColorAsync(string device, string model, int red, int green, int blue, CancellationToken cancellationToken = default);

        /// <summary>
        /// Sets the color temperature of the device asynchronously.
        /// </summary>
        /// <param name="device">The device.</param>
        /// <param name="model">The model.</param>
        /// <param name="temperature">The color temperature.</param>
        /// <param name="cancellationToken">The optional cancellation token.</param>
        /// <returns>The response indicating the success of setting the color temperature.</returns>
        Task<Response> SetColorTemperatureAsync(string device, string model, int temperature, CancellationToken cancellationToken = default);

        /// <summary>
        /// Turns the device on/off asynchronously.
        /// </summary>
        /// <param name="device">The device.</param>
        /// <param name="model">The model.</param>
        /// <param name="turnOn"><c>true</c> will turn the device on; otherwise <c>false</c> turns the device of.</param>
        /// <param name="cancellationToken">The optional cancellation token.</param>
        /// <returns>The response indicating the success of setting the state of the device.</returns>
        Task<Response> TurnOnOffAsync(string device, string model, bool turnOn, CancellationToken cancellationToken = default);
    }
}
