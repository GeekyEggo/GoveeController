namespace GoveeController.Govee.Models
{
    /// <summary>
    /// Provides information about a command.
    /// </summary>
    /// <typeparam name="TValue">The type of the value.</typeparam>
    public class Command<TValue>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Command{TValue}"/> class.
        /// </summary>
        /// <param name="name">The name of the command.</param>
        /// <param name="value">The value.</param>
        public Command(string name, TValue value)
        {
            this.Name = name;
            this.Value = value;
        }

        /// <summary>
        /// Gets or sets the name of the command.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets the value.
        /// </summary>
        public TValue Value { get; set; }
    }
}
