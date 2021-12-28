namespace GoveeController
{
    using GoveeController.Govee;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Hosting;
    using SharpDeck.Extensions.Hosting;

    /// <summary>
    /// The plugin.
    /// </summary>
    public class Program
    {
        /// <summary>
        /// Defines the entry point of the application.
        /// </summary>
        /// <param name="args">The arguments.</param>
        public static void Main(string[] args)
        {
#if DEBUG
            System.Diagnostics.Debugger.Launch();
#endif

            var appSettingsConfig = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false)
                .Build();

            new HostBuilder()
                .ConfigureServices(services =>
                {
                    services.AddSingleton<IGoveeClient>(provider =>
                    {
                        var client = new GoveeHttpClient();
                        client.SetApiKey(appSettingsConfig.GetValue<string>("ApiKey"));

                        return client;
                    });
                })
                .UseStreamDeck()
                .Start();
        }
    }
}
