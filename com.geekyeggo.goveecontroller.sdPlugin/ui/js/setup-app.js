function initializePlugin() {
	if (!SDPIComponents.streamDeckClient) {
		console.error("streamDeckClient is not initialized");
		return;
	}
	
	let localApiKey = null;
	let isDeviceCollectionDirty = false;

	const apiKeyInput = document.getElementById('api-key-input');
	const refreshApiKeyButton = document.getElementById('refresh-api-key');
	const connectButton = document.getElementById('connect-button');
	const messageElement = document.getElementById('message');
	const deviceSettings = document.getElementById('device-settings');
	const deviceSelect = document.getElementById('device-select');
	const actionSelect = document.getElementById('action-select');

	// Check if all elements are found
	if (!apiKeyInput || !refreshApiKeyButton || !connectButton || !messageElement || !deviceSettings || !deviceSelect || !actionSelect) {
		console.error("One or more required elements not found in the DOM");
		return;
	}

	const showDeviceSettings = (show) => {
		deviceSettings.classList.toggle('hidden', !show);
		if (show && isDeviceCollectionDirty) {
			deviceSelect.refresh();
		}
	};

	const lockApiKeyField = (lock) => {
		apiKeyInput.disabled = lock;
		connectButton.disabled = lock;
		// The refresh button should always be enabled
		refreshApiKeyButton.disabled = false;
	};

	const showMessage = (message, isError = false) => {
		messageElement.textContent = message;
		messageElement.className = 'sdpi-item-value';
		if (isError) {
			messageElement.classList.add('error');
		} else {
			messageElement.classList.add('success');
		}
		messageElement.classList.remove('hidden');
	};

	const connect = async () => {
		try {
			showMessage("Connecting...");

			const payload = { apiKey: apiKeyInput.value };

			console.log("Attempting to set global settings with payload:", payload);
			const result = await SDPIComponents.streamDeckClient.setGlobalSettings(payload);
			console.log("setGlobalSettings result:", result);
			
			showMessage("Connected successfully!");
			showDeviceSettings(true);
			lockApiKeyField(true);
		} catch (error) {
			console.error('Connection error:', error);
			showMessage(`An error occurred while connecting: ${error.message}. Please try again.`, true);
		}
	};

	const refreshApiKey = () => {
		apiKeyInput.value = '';
		localApiKey = null;
		lockApiKeyField(false);
		showDeviceSettings(false);
		messageElement.classList.add('hidden');
	};

	connectButton.addEventListener('click', connect);
	refreshApiKeyButton.addEventListener('click', refreshApiKey);

	deviceSelect.addEventListener('change', () => {
		actionSelect.disabled = !deviceSelect.value;
	});

	SDPIComponents.streamDeckClient.didReceiveGlobalSettings.subscribe((event) => {
		const globalSettings = event.payload.settings;
		const apiKey = globalSettings?.payload?.apiKey || globalSettings?.apiKey;

		isDeviceCollectionDirty = apiKey !== localApiKey;
		localApiKey = apiKey;

		if (apiKey) {
			apiKeyInput.value = apiKey;
			showDeviceSettings(true);
			lockApiKeyField(true);
		} else {
			showDeviceSettings(false);
			lockApiKeyField(false);
		}
	});

	SDPIComponents.streamDeckClient.getGlobalSettings().then((globalSettings) => {
		const apiKey = globalSettings?.payload?.apiKey || globalSettings?.apiKey;
		if (apiKey) {
			apiKeyInput.value = apiKey;
			showDeviceSettings(true);
			lockApiKeyField(true);
		}
	});
}

document.addEventListener("DOMContentLoaded", initializePlugin);

async function getDevices() {
	try {
		const response = await SDPIComponents.streamDeckClient.send("sendToPlugin", { event: "getDevices" });
		return response.payload.items;
	} catch (error) {
		console.error("Error fetching devices:", error);
		return [];
	}
}
