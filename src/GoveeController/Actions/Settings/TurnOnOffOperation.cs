namespace GoveeController.Actions.Settings
{
    /// <summary>
    /// Provides an enumeration of operations that can be used to control the on/off state of a device.
    /// </summary>
    public enum TurnOnOffOperation
    {
        /// <summary>
        /// Toggles the on/off state.
        /// </summary>
        Toggle = 0,

        /// <summary>
        /// Turns the device on.
        /// </summary>
        TurnOn = 1,

        /// <summary>
        /// Turns the device off.
        /// </summary>
        TurnOff = 2
    }
}
