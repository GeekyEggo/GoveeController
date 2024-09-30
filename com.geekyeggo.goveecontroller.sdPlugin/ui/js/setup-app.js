/**
 * Wraps the current element with an `sdpi-item` element and sets the provided label.
 * `sdpi-item` is a special element in the library that provides layout and styling.
 * @param {string} label - The label to set on the wrapper element.
 * @returns {HTMLElement} The wrapper element containing the current element.
 */
Element.prototype.wrapWithLabel = function (label) {
	const wrapper = document.createElement("sdpi-item");
	wrapper.setAttribute("label", label);
	wrapper.appendChild(this);
	return wrapper;
};

console.log("setup-app.js is being loaded");

// Add this check
if (typeof SDPIComponents === 'undefined') {
    console.error('SDPIComponents is not defined. SDPI Components library may not have loaded correctly.');
} else {
    console.log('SDPIComponents is available:', SDPIComponents);
}

function initializePlugin() {
    try {
        class GoveeSetup extends HTMLElement {
            constructor() {
                super();
                console.log("GoveeSetup constructor called");
                this.input = null;
                this.response = null;
                this.connectButton = null;
            }
            /**
             * Sets the disabled state of the child elements.
             * @param {boolean} value The disabled state.
             */
            set disabled(value) {
                    // this.input.disabled = false;
                    // this.button.disabled = false;
            }

            /**
             * Sets the error text.
             * @param {string} value The text.
             */
            set errorText(value) {
                this.response.setAttribute("text", value);
                this.response.classList.remove("hidden");
            }

            /**
             * Invoked each time the custom element is appended into a document-connected element.
             */
            connectedCallback() {
                console.log("GoveeSetup connectedCallback called");
                const container = document.createElement("div");
                container.classList.add("container");

                const apiKeyInput = document.createElement("sdpi-textfield");
                apiKeyInput.setAttribute("name", "api-key");
                apiKeyInput.setAttribute("placeholder", "Enter your API Key");
                apiKeyInput.id = "api-key-input";
                this.input = apiKeyInput;

                const apiKeyInputWrapper = document.createElement("sdpi-item");
                apiKeyInputWrapper.setAttribute("label", "API Key");
                apiKeyInputWrapper.appendChild(apiKeyInput);
                container.appendChild(apiKeyInputWrapper);

                const connectButtonWrapper = document.createElement("sdpi-item");
                connectButtonWrapper.setAttribute("label", "Connect");

                const connectButton = document.createElement("sdpi-button");
                connectButton.textContent = "Connect"; // Use textContent instead of setAttribute
                connectButton.id = "connect-button";
                this.connectButton = connectButton;
                connectButton.addEventListener("click", () => this.connect());

                connectButtonWrapper.appendChild(connectButton);
                container.appendChild(connectButtonWrapper);

                // Result of connecting when failure.
                this.response = document.createElement("sdpi-content");
                this.response.classList.add("hidden");
                container.appendChild(this.response);

                // Helper text.
                const helper = document.createElement("div");
                helper.classList.add("row");
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
                this.response.textContent = "Connecting...";
                this.response.classList.remove("hidden");

                const payload = {
                    apiKey: this.input.value
                };

                console.log('Attempting to set global settings:', payload);

                try {
                    await SDPIComponents.streamDeckClient.setGlobalSettings(payload);
                    console.log('Global settings set successfully');

                    this.response.textContent = "Connected successfully!";
                    showSettings(true);
                } catch (error) {
                    console.error("Error during connection:", error);
                    this.response.textContent = "An error occurred while connecting. Please try again.";
                }
            }
        }

        customElements.define("setup-app", GoveeSetup);
        console.log("GoveeSetup custom element defined");

        let localApiKey = null;
        let isDeviceCollectionDirty = false;

        /* Handles toggling of the desired panel. */
        const showSettings = function (canShowSettings) {
            console.log("showSettings called with:", canShowSettings);
            const setup = document.querySelector("setup-app");
            const settings = document.getElementById("settings");

            console.log("setup element:", setup);
            console.log("settings element:", settings);

            if (canShowSettings) {
                if (isDeviceCollectionDirty) {
                    console.log("refreshing");
                    document.querySelector("sdpi-select[setting='deviceId']").refresh();
                }
            
                settings.classList.remove("hidden");
                setup.classList.add("hidden");
                console.log("Showing settings, hiding setup");
            } else {
                setup.classList.remove("hidden");
                settings.classList.add("hidden");
                console.log("Showing setup, hiding settings");
            }
        };

        /* Monitor global settings changing. */
        SDPIComponents.streamDeckClient.didReceiveGlobalSettings.subscribe((event) => {
            console.log('Received Global Settings Event:', event);
            const globalSettings = event.payload.settings;
            console.log('Extracted Global Settings:', globalSettings);

            let apiKey;
            if (globalSettings && globalSettings.payload && globalSettings.payload.apiKey) {
                apiKey = globalSettings.payload.apiKey;
            } else if (globalSettings && globalSettings.apiKey) {
                apiKey = globalSettings.apiKey;
            }

            console.log('Extracted API Key:', apiKey);
            isDeviceCollectionDirty = apiKey !== localApiKey;
            localApiKey = apiKey;

            showSettings(!!apiKey);
        });

        /* Invoke a request for the global settings. */
        SDPIComponents.streamDeckClient.getGlobalSettings().then((globalSettings) => {
            console.log('Initial global settings:', globalSettings);
            // ... (existing code)
        });
    } catch (error) {
        console.error('Error initializing plugin:', error);
    }
}

// Call the initialization function when the document is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePlugin);
} else {
    initializePlugin();
}

async function getDevices() {
    try {
        const response = await SDPIComponents.streamDeckClient.send("sendToPlugin", { event: "getDevices" });
        return response.payload.items;
    } catch (error) {
        console.error("Error fetching devices:", error);
        return [];
    }
}
