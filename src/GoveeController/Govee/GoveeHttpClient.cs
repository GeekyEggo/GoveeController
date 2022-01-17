namespace GoveeController.Govee
{
    using System.Net;
    using System.Net.Http.Headers;
    using System.Net.Http.Json;
    using System.Text.Json;
    using GoveeController.Extensions;
    using GoveeController.Govee.Models;
    using GoveeController.Serialization;
    using Microsoft.Extensions.Logging;

    /// <summary>
    /// Provides methods for interacting with Govee devices.
    /// </summary>
    public class GoveeHttpClient : IGoveeClient
    {
        /// <summary>
        /// The Govee API key header name.
        /// </summary>
        public const string GOVEE_API_KEY_HEADER_NAME = "Govee-API-Key";

        /// <summary>
        /// The application/json header media type.
        /// </summary>
        private static readonly MediaTypeHeaderValue APPLICATION_JSON_MEDIA_TYPE = new MediaTypeHeaderValue("application/json");

        /// <summary>
        /// The serializer options.
        /// </summary>
        private static readonly JsonSerializerOptions _serializerOptions = new JsonSerializerOptions
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
            WriteIndented = false
        };

        /// <summary>
        /// Initializes a new instance of the <see cref="GoveeHttpClient"/> class.
        /// </summary>
        /// <param name="logger">The logger.</param>
        public GoveeHttpClient(ILogger<GoveeHttpClient> logger)
            => this.Logger = logger;

        /// <summary>
        /// Gets the HTTP client.
        /// </summary>
        private HttpClient HttpClient { get; } = new HttpClient
        {
            BaseAddress = new Uri("https://developer-api.govee.com/v1/devices/")
        };

        /// <summary>
        /// Gets a value indicating whether this instance has API key set.
        /// </summary>
        private bool HasApiKey => this.HttpClient.DefaultRequestHeaders.TryGetValues(GOVEE_API_KEY_HEADER_NAME, out var values) && values.Any(value => !string.IsNullOrWhiteSpace(value));

        /// <summary>
        /// Gets the logger.
        /// </summary>
        private ILogger Logger { get; }

        /// <inheritdoc/>
        public void SetApiKey(string key)
        {
            if (!this.HttpClient.DefaultRequestHeaders.TryGetValues(GOVEE_API_KEY_HEADER_NAME, out var values)
                || values.FirstOrDefault() != key)
            {
                this.HttpClient.DefaultRequestHeaders.Remove(GOVEE_API_KEY_HEADER_NAME);
                this.HttpClient.DefaultRequestHeaders.Add(GOVEE_API_KEY_HEADER_NAME, key);
            }
        }

        /// <inheritdoc/>
        public virtual async Task<Response<DeviceCollection>> GetDevicesAsync(CancellationToken cancellationToken = default)
        {
            using var request = new HttpRequestMessage(HttpMethod.Get, string.Empty);
            return await this.SendAsync<Response<DeviceCollection>>(request, cancellationToken);
        }

        /// <inheritdoc/>
        public async Task<Response<DeviceState>> GetDeviceStateAsync(string device, string model, CancellationToken cancellationToken = default)
        {
            using var request = new HttpRequestMessage(HttpMethod.Get, $"state?device={Uri.EscapeDataString(device)}&model={Uri.EscapeDataString(model)}");
            return await this.SendAsync<Response<DeviceState>>(request, cancellationToken);
        }

        /// <inheritdoc/>
        public Task<Response> SetBrightnessAsync(string device, string model, int brightness, CancellationToken cancellationToken = default)
        {
            var payload = new ControlPayload<int>(device, model, CommandNames.Brightness, brightness.InRangeOf(0, 100));
            return this.ControlAsync(payload, cancellationToken);
        }

        /// <inheritdoc/>
        public Task<Response> SetColorAsync(string device, string model, int red, int green, int blue, CancellationToken cancellationToken = default)
        {
            var rgbValue = new RgbValue(red.InColorRange(), green.InColorRange(), blue.InColorRange());
            var payload = new ControlPayload<RgbValue>(device, model, CommandNames.Color, rgbValue);

            return this.ControlAsync(payload, cancellationToken);
        }

        /// <inheritdoc/>
        public Task<Response> SetColorTemperatureAsync(string device, string model, int temperature, CancellationToken cancellationToken = default)
        {
            var payload = new ControlPayload<int>(device, model, CommandNames.ColorTemperature, temperature);
            return this.ControlAsync(payload, cancellationToken);
        }

        /// <inheritdoc/>
        public Task<Response> TurnOnOffAsync(string device, string model, bool turnOn, CancellationToken cancellationToken = default)
        {
            var payload = new ControlPayload<string>(device, model, CommandNames.Turn, turnOn ? OnOffBooleanJsonConverter.TRUE : OnOffBooleanJsonConverter.FALSE);
            return this.ControlAsync(payload, cancellationToken);
        }

        /// <summary>
        /// Sends the request asynchronously.
        /// </summary>
        /// <typeparam name="TResponse">The type of the response.</typeparam>
        /// <param name="request">The request to send.</param>
        /// <param name="cancellationToken">The cancellation token.</param>
        /// <returns>The response; defaults to <see cref="HttpStatusCode.BadRequest"/> upon failure.</returns>
        protected virtual async Task<TResponse> SendAsync<TResponse>(HttpRequestMessage request, CancellationToken cancellationToken = default)
            where TResponse : Response, new()
        {
            // Only make a request when we have an API key set.
            if (!this.HasApiKey)
            {
                return new TResponse
                {
                    StatusCode = HttpStatusCode.Unauthorized,
                    Message = "API key is missing"
                };
            }

            using var response = await this.HttpClient.SendAsync(request, cancellationToken);

            try
            {
                // Read the contents of the response, and log them for debugging.
                var content = await response.Content.ReadAsStringAsync(cancellationToken);
                this.Logger.LogDebug($"Request: {request.RequestUri}, Response: {content}.");

                // Parse the content as JSON, and return.
                var result = JsonSerializer.Deserialize<TResponse>(content, _serializerOptions);
                if (result == null)
                {
                    throw new InvalidOperationException("Failed to pase response.");
                }

                result.StatusCode = response.StatusCode;
                return result;
            }
            catch (Exception ex)
            {
                this.Logger.LogError(ex, $"Request: {request.RequestUri} failed.");
                return new TResponse
                {
                    StatusCode = response.StatusCode,
                    Message = ex.Message
                };
            }
        }

        /// <summary>
        /// Controls the device asynchronously.
        /// </summary>
        /// <typeparam name="TCommandValue">The type of the command value.</typeparam>
        /// <param name="payload">The payload to send that defines what should happen to the device.</param>
        /// <param name="cancellationToken">The optional cancellation token.</param>
        /// <returns>The response indicating the success of executing the command.</returns>
        private async Task<Response> ControlAsync<TCommandValue>(ControlPayload<TCommandValue> payload, CancellationToken cancellationToken = default)
        {
            using var request = new HttpRequestMessage(HttpMethod.Put, "control");
            using var content = JsonContent.Create(payload, APPLICATION_JSON_MEDIA_TYPE, _serializerOptions);

            request.Content = content;
            return await this.SendAsync<Response>(request, cancellationToken);
        }
    }
}
