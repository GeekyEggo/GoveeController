namespace GoveeController.Govee.Models
{
    using System.Net;

    /// <summary>
    /// Provides a base response for a request to the Govee API.
    /// </summary>
    public class Response
    {
        /// <summary>
        /// Gets or sets the message.
        /// </summary>
        public string? Message { get; set; }

        /// <summary>
        /// Gets a value indicating whether this instance represents a success.
        /// </summary>
        public bool IsSuccess => this.Message == "Success";

        /// <summary>
        /// Gets or sets the status of the response.
        /// </summary>
        public HttpStatusCode StatusCode { get; set; } = HttpStatusCode.OK;
    }
}