document.addEventListener("DOMContentLoaded", () => {
	const setupWrapper = document.getElementById("setup");
	const settingsWrapper = document.getElementById("settings");
	const connectElem = document.getElementById("connect");
	const apiKeyElem = document.getElementById("apiKey");
	const failedElem = document.getElementById("errorMessage");

	let localApiKey = null;
	let isDeviceCollectionDirty = false;

	/**
	 * Handle the "Connect" button being clicked, attempting to establish the connection with Govee.
	 */
	connectElem.addEventListener("click", async () => {
		const toggleEnabledState = (enabled) => {
			apiKeyElem.disabled = !enabled;
			connectElem.disabled = !enabled;
			connectElem.innerText = enabled ? "Connect" : "Connecting...";
		};

		toggleEnabledState(false);
		const res = await fetch("https://openapi.api.govee.com/router/api/v1/user/devices", {
			headers: {
				"Content-Type": "application/json",
				"Govee-API-Key": apiKeyElem.value
			}
		});

		if (res.ok) {
			isDeviceCollectionDirty = true;
			SDPIComponents.streamDeckClient.setGlobalSettings({ apiKey: apiKeyElem.value });
			showSettings(true);
			failedElem.classList.add("hidden");
		} else {
			failedElem.classList.remove("hidden");
		}

		toggleEnabledState(true);
	});

	/**
	 * Sets the visibility of the settings associated with the actions.
	 * @param {boolean} showSettings Determines whether to show the settings.
	 */
	const showSettings = (showSettings) => {
		const show = (elem) => elem.classList.remove("hidden");
		const hide = (elem) => elem.classList.add("hidden");

		console.log("canShowSettings", showSettings);

		if (showSettings) {
			if (isDeviceCollectionDirty) {
				console.log("refreshing");
				document.querySelectorAll("sdpi-select[setting='deviceId']")[0].refresh();
			}

			show(settingsWrapper);
			hide(setupWrapper);
		} else {
			show(setupWrapper);
			hide(settingsWrapper);
		}
	};

	// Monitor global settings changing.
	SDPIComponents.streamDeckClient.didReceiveGlobalSettings.subscribe((globalSettings) => {
		console.log("HELLO WORLD");

		const apiKey = globalSettings.payload?.settings?.apiKey;
		isDeviceCollectionDirty = apiKey != localApiKey;
		localApiKey = apiKey;
		showSettings(!!apiKey);
	});

	// Invoke a request for the global settings.
	SDPIComponents.streamDeckClient.getGlobalSettings();
});
