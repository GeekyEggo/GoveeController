const showSettings = function (canShow) {
    const setup = document.getElementsByTagName('govee-setup');
    const settings = document.getElementById('settings');

    if (canShow) {
        setup[0].classList.add('hidden');
        settings.classList.remove('hidden');
    } else {
        setup[0].classList.remove('hidden');
        settings.classList.add('hidden');
    }
}

class GoveeSetup extends HTMLElement {
    /**
     * Sets the disabled state of the child elements.
     * @param {any} value The disabled state.
     */
    set disabled(value) {
        this.input.disabled = value;
        this.button.disabled = value;
    }

    /**
     * Sets the error text.
     * @param {string} value The text.
     */
    set errorText(value) {
        this.response.setAttribute('text', value);
    }

    /**
     * Invoked each time the custom element is appended into a document-connected element
     */
    connectedCallback() {
        const container = document.createElement('div');
        container.classList.add('container');

        // Input text field for API key.
        this.input = document.createElement('sdpi-text');
        this.input.setAttribute('label', 'Api Key');
        container.appendChild(this.input);

        // Conect button.
        this.button = document.createElement('sdpi-button');
        this.button.setAttribute('value', 'Connect');
        this.button.addEventListener('click', () => this.connect());
        container.appendChild(this.button);

        // Result of connecting when failure.
        this.response = document.createElement('sdpi-content');
        container.appendChild(this.response);

        this.appendChild(container);
    }

    /*
     * Attempts to connect to the Govee API.
     */
    async connect() {
        this.disabled = true;
        this.errorText = '';

        const response = await window.streamDeckClient.get('ConnectAsync', { 'apiKey': this.input.value });

        if (response.payload.data.isSuccess) {
            showSettings(true);
            document.getElementById('deviceId').refresh();
        } else {
            this.errorText = `Setup failed: ${response.payload.data.message || 'Connecting failed, please try again'}`;
            this.disabled = false;
        }
    }
}

customElements.define('govee-setup', GoveeSetup);

(async function () {
    const settings = await window.streamDeckClient.getGlobalSettings();
    showSettings(settings.payload.settings.isConnected);
})();
