(function () {
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
            this.response.classList.remove('hidden');
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
            this.response.classList.add('hidden');
            container.appendChild(this.response);

            // Helper text.
            const helper = document.createElement('div');
            helper.classList.add('row');
            helper.innerHTML = `
                <div class="col-content">
                    <strong>How to:</strong>
                    <ol>
                        <li>Open the Govee app.</li>
                        <li>Go to the user tab > "About Us".</li>
                        <li>Select "Apply for API Key".</li>
                    </ol>
                </div>`;

            container.appendChild(helper);

            this.appendChild(container);
        }

        /*
        * Attempts to connect to the Govee API.
        */
        async connect() {
            this.disabled = true;
            this.errorText = 'Connecting...';

            const response = await window.streamDeckClient.get('ConnectAsync', { 'apiKey': this.input.value });

            if (!response.payload.data.isSuccess) {
                this.errorText = `Setup failed: ${response.payload.data.message || 'Connecting failed, please try again'}`;
                this.disabled = false;
            }
        }
    }

    customElements.define('govee-setup', GoveeSetup);

    /* Handles toggling of the desired panel. */
    let shouldRefresh = false;
    const showSettings = function (canShowSettings) {
        const setup = document.getElementsByTagName('govee-setup')[0];
        const settings = document.getElementById('settings');

        const show = function (elem) { elem.classList.remove('hidden') };
        const hide = function (elem) { elem.classList.add('hidden'); }

        if (canShowSettings) {
            if (shouldRefresh) {
                console.log('refreshing');
                document.getElementById('deviceId').refresh();
            }

            show(settings)
            hide(setup);
        } else {
            show(setup);
            hide(settings);
        }
    }

    /* Monitor global settings changing. */
    window.streamDeckClient.didReceiveGlobalSettings.subscribe(globalSettings => {
        if (!globalSettings.payload.settings.isConnected) {
            shouldRefresh = true;
        }

        showSettings(globalSettings.payload.settings.isConnected);
    })

    /* Invoke a request for the global settings. */
    window.streamDeckClient.getGlobalSettings();
})();
