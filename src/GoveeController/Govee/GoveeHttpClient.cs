namespace GoveeController.Govee
{
    using System.Net;
    using System.Text;
    using System.Text.Json;
    using System.Text.Json.Serialization.Metadata;
    using GoveeController.Extensions;
    using GoveeController.Govee.Serialization;

    /// <summary>
    /// Provides methods for interacting with Govee devices.
    /// </summary>
    public class GoveeHttpClient
    {
        /// <summary>
        /// The base address.
        /// </summary>
        public static readonly Uri BaseAddress = new Uri("https://developer-api.govee.com/v1/devices/");

        /// <summary>
        /// The application/json header media type.
        /// </summary>
        private const string APPLICATION_JSON_MEDIA_TYPE = "application/json";

        /// <summary>
        /// Initializes a new instance of the <see cref="GoveeHttpClient" /> class.
        /// </summary>
        /// <param name="authorizationProvider">The authorization provider.</param>
        /// <param name="httpClientFactory">The HTTP client factory.</param>
        /// <param name="loggerFactory">The logger factory.</param>
        public GoveeHttpClient(AuthorizationProvider authorizationProvider, IHttpClientFactory httpClientFactory, ILoggerFactory loggerFactory)
        {
            this.AuthorizationProvider = authorizationProvider;
            this.Logger = loggerFactory.CreateLogger<GoveeHttpClient>();
            this.HttpClientFactory = httpClientFactory;
        }

        /// <summary>
        /// Gets the authorization provider.
        /// </summary>
        protected AuthorizationProvider AuthorizationProvider { get; }

        /// <summary>
        /// Gets the HTTP client factory.
        /// </summary>
        private IHttpClientFactory HttpClientFactory { get; }

        /// <summary>
        /// Gets the logger.
        /// </summary>
        private ILogger Logger { get; }

        /// <summary>
        /// Gets the devices asynchronously.
        /// </summary>
        /// <param name="cancellationToken">The optional cancellation token.</param>
        /// <returns>The response that contains the devices.</returns>
        public virtual async Task<Response<DeviceCollection>> GetDevicesAsync(CancellationToken cancellationToken = default)
        {
            using var request = new HttpRequestMessage(HttpMethod.Get, string.Empty);
            return await this.SendAsync(request, GoveeJsonContext.Default.ResponseDeviceCollection, cancellationToken);
        }

        /// <summary>
        /// Gets the state of the device asynchronously.
        /// </summary>
        /// <param name="device">The device.</param>
        /// <param name="model">The model.</param>
        /// <param name="cancellationToken">The optional cancellation token.</param>
        /// <returns>The response containing the state of the device.</returns>
        public async Task<Response<DeviceState>> GetDeviceStateAsync(string device, string model, CancellationToken cancellationToken = default)
        {
            using var request = new HttpRequestMessage(HttpMethod.Get, $"state?device={Uri.EscapeDataString(device)}&model={Uri.EscapeDataString(model)}");
            return await this.SendAsync(request, GoveeJsonContext.Default.ResponseDeviceState, cancellationToken);
        }

        /// <summary>
        /// Sets the brightness of the device asynchronously.
        /// </summary>
        /// <param name="device">The device.</param>
        /// <param name="model">The model.</param>
        /// <param name="brightness">The brightness.</param>
        /// <param name="cancellationToken">The optional cancellation token.</param>
        /// <returns>The response indicating the success of setting the brightness.</returns>
        public Task<Response> SetBrightnessAsync(string device, string model, int brightness, CancellationToken cancellationToken = default)
        {
            var payload = new ControlPayload<int>(device, model, CommandNames.Brightness, brightness.InRangeOf(0, 100));
            return this.ControlAsync(payload, GoveeJsonContext.Default.ControlPayloadInt32, cancellationToken);
        }

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
        public Task<Response> SetColorAsync(string device, string model, int red, int green, int blue, CancellationToken cancellationToken = default)
        {
            var rgbValue = new RgbValue(red.InColorRange(), green.InColorRange(), blue.InColorRange());
            var payload = new ControlPayload<RgbValue>(device, model, CommandNames.Color, rgbValue);

            return this.ControlAsync(payload, GoveeJsonContext.Default.ControlPayloadRgbValue, cancellationToken);
        }

        /// <summary>
        /// Sets the color temperature of the device asynchronously.
        /// </summary>
        /// <param name="device">The device.</param>
        /// <param name="model">The model.</param>
        /// <param name="temperature">The color temperature.</param>
        /// <param name="cancellationToken">The optional cancellation token.</param>
        /// <returns>The response indicating the success of setting the color temperature.</returns>
        public Task<Response> SetColorTemperatureAsync(string device, string model, int temperature, CancellationToken cancellationToken = default)
        {
            var payload = new ControlPayload<int>(device, model, CommandNames.ColorTemperature, temperature);
            return this.ControlAsync(payload, GoveeJsonContext.Default.ControlPayloadInt32, cancellationToken);
        }

        /// <summary>
        /// Turns the device on/off asynchronously.
        /// </summary>
        /// <param name="device">The device.</param>
        /// <param name="model">The model.</param>
        /// <param name="turnOn"><c>true</c> will turn the device on; otherwise <c>false</c> turns the device of.</param>
        /// <param name="cancellationToken">The optional cancellation token.</param>
        /// <returns>The response indicating the success of setting the state of the device.</returns>
        public Task<Response> TurnOnOffAsync(string device, string model, bool turnOn, CancellationToken cancellationToken = default)
        {
            var payload = new ControlPayload<string>(device, model, CommandNames.Turn, turnOn ? OnOffBooleanJsonConverter.TRUE : OnOffBooleanJsonConverter.FALSE);
            return this.ControlAsync(payload, GoveeJsonContext.Default.ControlPayloadString, cancellationToken);
        }

        /// <summary>
        /// Sends the request asynchronously.
        /// </summary>
        /// <typeparam name="TResponse">The type of the response.</typeparam>
        /// <param name="request">The request to send.</param>
        /// <param name="jsonTypeInfo">The JSON type information.</param>
        /// <param name="cancellationToken">The cancellation token.</param>
        /// <returns>The response; defaults to <see cref="HttpStatusCode.BadRequest"/> upon failure.</returns>
        protected virtual async Task<TResponse> SendAsync<TResponse>(HttpRequestMessage request, JsonTypeInfo<TResponse> jsonTypeInfo, CancellationToken cancellationToken = default)
            where TResponse : Response, new()
        {
            // Only make a request when we have an API key set.
            if (!await this.AuthorizationProvider.TryAuthorizeAsync(request, cancellationToken))
            {
                return new TResponse
                {
                    StatusCode = HttpStatusCode.BadRequest,
                    Message = "Request intercepted; API key is undefined"
                };
            }

            try
            {
                // Don't dispose of the client; this is handled interally (https://learn.microsoft.com/en-us/aspnet/core/fundamentals/http-requests).
                var httpClient = this.HttpClientFactory.CreateClient(nameof(GoveeHttpClient));
                using var response = await httpClient.SendAsync(request, cancellationToken);

                try
                {
                    // Read the contents of the response, and log them for debugging.
                    var content = await response.Content.ReadAsStringAsync(cancellationToken);
                    await this.LogAsync(request, response, content, cancellationToken);

                    // Prevent deserialization if we have been throttled.
                    if (response.StatusCode == HttpStatusCode.TooManyRequests)
                    {
                        return new TResponse
                        {
                            StatusCode = response.StatusCode,
                            Message = content
                        };
                    }

                    // Parse the content as JSON, and return.
                    var result = JsonSerializer.Deserialize(content, jsonTypeInfo);
                    if (result == null)
                    {
                        throw new InvalidOperationException("Failed to parse response.");
                    }

                    result.StatusCode = response.StatusCode;
                    return result;
                }
                catch (Exception ex)
                {
                    this.Logger.LogError(ex, "Request: {requestUri}, Response: {code}.", request.RequestUri, response.StatusCode);
                    return new TResponse
                    {
                        StatusCode = response.StatusCode,
                        Message = ex.Message
                    };
                }
            }
            catch (Exception ex)
            {
                return new TResponse
                {
                    StatusCode = HttpStatusCode.InternalServerError,
                    Message = ex.Message
                };
            }
        }

        /// <summary>
        /// Controls the device asynchronously.
        /// </summary>
        /// <typeparam name="TCommandValue">The type of the command value.</typeparam>
        /// <param name="payload">The payload to send that defines what should happen to the device.</param>
        /// <param name="jsonTypeInfo">The JSON type information.</param>
        /// <param name="cancellationToken">The optional cancellation token.</param>
        /// <returns>The response indicating the success of executing the command.</returns>
        private async Task<Response> ControlAsync<TCommandValue>(ControlPayload<TCommandValue> payload, JsonTypeInfo<ControlPayload<TCommandValue>> jsonTypeInfo, CancellationToken cancellationToken = default)
        {
            using var request = new HttpRequestMessage(HttpMethod.Put, "control");
            using var content = new StringContent(JsonSerializer.Serialize(payload, jsonTypeInfo), Encoding.UTF8, APPLICATION_JSON_MEDIA_TYPE);

            request.Content = content;
            return await this.SendAsync(request, GoveeJsonContext.Default.Response, cancellationToken);
        }

        /// <summary>
        /// Provides detailed logging for a request, and the response.
        /// </summary>
        /// <param name="request">The request.</param>
        /// <param name="response">The response.</param>
        /// <param name="responseContent">The content of the response.</param>
        /// <param name="cancellationToken">The cancellation token.</param>
        /// <returns>The task of logging the request and the response.</returns>
        private async Task LogAsync(HttpRequestMessage request, HttpResponseMessage response, string responseContent, CancellationToken cancellationToken)
        {
            if (!this.Logger.IsEnabled(LogLevel.Debug))
            {
                return;
            }

            var requestContent = await (request.Content?.ReadAsStringAsync(cancellationToken) ?? Task.FromResult(string.Empty));
            var requestLog = string.IsNullOrWhiteSpace(requestContent)
                ? $"Request: {request.Method} {request.RequestUri}"
                : $"Request: {request.Method} {request.RequestUri}, Content: {requestContent}";

            this.Logger.LogDebug("Communicating with Govee...{newLine}{request}{newLine}Response: {code} {content}", Environment.NewLine, requestLog, Environment.NewLine, response.StatusCode, responseContent);
        }
    }
}
