namespace GoveeController.Services
{
    using System.Threading;
    using System.Threading.Tasks;
    using Microsoft.Extensions.Hosting;
    using Microsoft.Extensions.Logging;

    /// <summary>
    /// Provides a <see cref="BackgroundService"/> that initializes the <see cref="IGoveeService"/> with the API key stored in the global settings.
    /// </summary>
    public class GoveeConnectorBackgroundService : BackgroundService
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GoveeConnectorBackgroundService"/> class.
        /// </summary>
        /// <param name="goveeService">The Govee service.</param>
        public GoveeConnectorBackgroundService(IGoveeService goveeService, ILogger<GoveeConnectorBackgroundService> logger)
            : base()
        {
            this.GoveeService = goveeService;
            this.Logger = logger;
        }

        /// <summary>
        /// Gets the Govee service.
        /// </summary>
        private IGoveeService GoveeService { get; }

        /// <summary>
        /// Gets the logger.
        /// </summary>
        private ILogger<GoveeConnectorBackgroundService> Logger { get; }

        /// <inheritdoc/>
        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            var connection = await this.GoveeService.TryConnectAsync(stoppingToken);
            if (connection.IsSuccess)
            {
                this.Logger.LogInformation("Successfully connected to Govee.");
            }
            else
            {
                this.Logger.LogError("Unable to connect to Govee: \"{ResponseMessage}\".", connection.Message);
            }
        }
    }
}
