namespace GoveeController.Govee
{
    /// <summary>
    /// An authorization provider for Govee API requests.
    /// </summary>
    public class AuthorizationProvider
    {
        /// <summary>
        /// The synchronization root.
        /// </summary>
        private static readonly SemaphoreSlim _syncRoot = new SemaphoreSlim(1);

        /// <summary>
        /// The Govee API key header name.
        /// </summary>
        public const string GOVEE_API_KEY_HEADER_NAME = "Govee-API-Key";

        /// <summary>
        /// Initializes a new instance of the <see cref="AuthorizationProvider"/> class.
        /// </summary>
        /// <param name="connection">The Stream Deck connection.</param>
        public AuthorizationProvider(IStreamDeckConnection connection)
            => this.Connection = connection;

        /// <summary>
        /// Gets the connection.
        /// </summary>
        private IStreamDeckConnection Connection { get; }

        /// <summary>
        /// Gets or sets the API key.
        /// </summary>
        private string? ApiKey { get; set; }

        /// <summary>
        /// Sets the authorization asynchronously.
        /// </summary>
        /// <param name="apiKey">The API key.</param>
        /// <param name="cancellationToken">The optional cancellation token.</param>
        public async Task SetAuthorizationAsync(string? apiKey = default, CancellationToken cancellationToken = default)
        {
            await _syncRoot.WaitAsync(cancellationToken);

            try
            {
                this.ApiKey = apiKey;
                await this.Connection.SetGlobalSettingsAsync(new GlobalSettings(apiKey), cancellationToken);
            }
            finally
            {
                _syncRoot.Release();
            }
        }

        /// <summary>
        /// Tries the authorize the <paramref name="request"/> asynchronously.
        /// </summary>
        /// <param name="request">The request to authorize.</param>
        /// <param name="cancellationToken">The optional cancellation token.</param>
        /// <returns><c>true</c> when the request could be authorized; otherwise <c>false</c>.</returns>
        public async ValueTask<bool> TryAuthorizeAsync(HttpRequestMessage request, CancellationToken cancellationToken = default)
        {
            await _syncRoot.WaitAsync(cancellationToken);

            try
            {
                if (string.IsNullOrEmpty(this.ApiKey))
                {
                    var globalSettings = await this.Connection.GetGlobalSettingsAsync<GlobalSettings>(cancellationToken);
                    this.ApiKey = globalSettings.ApiKey;
                }

                if (string.IsNullOrWhiteSpace(this.ApiKey))
                {
                    return false;
                }

                request.Headers.Add(GOVEE_API_KEY_HEADER_NAME, this.ApiKey);
                return true;
            }
            finally
            {
                _syncRoot.Release();
            }
        }
    }

    /// <summary>
    /// Provides information about the global settings of the plugin.
    /// </summary>
    public record GlobalSettings(string? ApiKey = default);
}
