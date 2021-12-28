namespace GoveeController.Govee
{
    using System.Net;
    using System.Net.Http.Headers;
    using System.Net.Http.Json;
    using System.Text.Json;
    using GoveeController.Extensions;
    using GoveeController.Govee.Models;

    /// <summary>
    /// Provides methods for interacting with Govee devices.
    /// </summary>
    public class GoveeHttpClient : IGoveeClient
    {
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
        /// Gets the HTTP client.
        /// </summary>
        private HttpClient HttpClient { get; } = new HttpClient
        {
            BaseAddress = new Uri("https://developer-api.govee.com/v1/devices/")
        };

        /// <inheritdoc/>
        public void SetApiKey(string key)
        {
            const string GOVEE_API_KEY_HEADER_NAME = "Govee-API-Key";
            if (!this.HttpClient.DefaultRequestHeaders.TryGetValues(GOVEE_API_KEY_HEADER_NAME, out var values)
                || values.FirstOrDefault() != key)
            {
                this.HttpClient.DefaultRequestHeaders.Remove(GOVEE_API_KEY_HEADER_NAME);
                this.HttpClient.DefaultRequestHeaders.Add(GOVEE_API_KEY_HEADER_NAME, key);
            }
        }

        /// <inheritdoc/>
        public async Task<Response<DeviceCollection>> GetDevicesAsync(CancellationToken cancellationToken = default)
        {
            using var request = new HttpRequestMessage(HttpMethod.Get, string.Empty);
            return await this.SendAsync<Response<DeviceCollection>>(request, cancellationToken);
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
            var rgbValue = new RgbCommandValue(red.InColorRange(), green.InColorRange(), blue.InColorRange());
            var payload = new ControlPayload<RgbCommandValue>(device, model, CommandNames.Color, rgbValue);

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
            var payload = new ControlPayload<string>(device, model, CommandNames.Turn, turnOn ? "on" : "off");
            return this.ControlAsync(payload, cancellationToken);
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

        /// <summary>
        /// Sends the request asynchronously.
        /// </summary>
        /// <typeparam name="TResponse">The type of the response.</typeparam>
        /// <param name="request">The request to send.</param>
        /// <param name="cancellationToken">The cancellation token.</param>
        /// <returns>The response; defaults to <see cref="HttpStatusCode.BadRequest"/> upon failure.</returns>
        private async Task<TResponse> SendAsync<TResponse>(HttpRequestMessage request, CancellationToken cancellationToken = default)
            where TResponse : Response, new()
        {
            using var response = await this.HttpClient.SendAsync(request, cancellationToken);

            try
            {
                var result = await response.Content.ReadFromJsonAsync<TResponse>(_serializerOptions, cancellationToken);
                return result ?? CreateDefaultResponse();
            }
            catch
            {
                response.EnsureSuccessStatusCode();
                return CreateDefaultResponse();
            }

            static TResponse CreateDefaultResponse()
            {
                return new TResponse()
                {
                    Status = HttpStatusCode.BadRequest,
                    Message = "Unknown error"
                };
            }
        }
    }
}
