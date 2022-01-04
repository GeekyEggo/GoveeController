namespace GoveeController.Services
{
    using System.Threading;
    using System.Threading.Tasks;
    using Microsoft.Extensions.Hosting;

    /// <summary>
    /// Provides a <see cref="BackgroundService"/> that initializes the <see cref="IGoveeService"/> with the API key stored in the global settings.
    /// </summary>
    public class GoveeConnectorBackgroundService : BackgroundService
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GoveeConnectorBackgroundService"/> class.
        /// </summary>
        /// <param name="goveeService">The Govee service.</param>
        public GoveeConnectorBackgroundService(IGoveeService goveeService)
            : base() => this.GoveeService = goveeService;

        /// <summary>
        /// Gets the Govee service.
        /// </summary>
        private IGoveeService GoveeService { get; }

        /// <inheritdoc/>
        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
            => await this.GoveeService.TryConnectAsync(stoppingToken);
    }
}
