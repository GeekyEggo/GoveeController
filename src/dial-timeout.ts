const dials = new Map<
	string,
	{
		/**
		 * Original function that will occur when the timeout expires.
		 */
		fn: () => void;

		/**
		 * Debounced function.
		 */
		debounce: () => void;

		/**
		 * Handle responsible for cancelling the timeout.
		 */
		handle?: NodeJS.Timeout;
	}
>();

/**
 * Sets a timeout function for the dial, identified by the {@link id}. The {@link fn} is executed after 2 seconds, but is debounced if a subsequent call to this function occurs before
 * the {@link fn} executes.
 * @param id Action identifier.
 * @param fn Function to execute.
 */
export function dialTimeout(id: string, fn: () => void): void {
	let entry = dials.get(id);
	if (entry !== undefined) {
		entry.debounce();
	} else {
		entry = {
			debounce: (): void => {
				if (entry === undefined) {
					return;
				}

				if (entry.handle) clearInterval(entry.handle);
				entry.handle = setTimeout(() => clearDialTimeout(id), 2000);
			},
			fn
		};

		dials.set(id, entry);
		entry.debounce();
	}
}

/**
 * Clears the timeout associated with the action.
 * @param id Action identifier.
 */
export function clearDialTimeout(id: string): void {
	const entry = dials.get(id);
	if (entry) {
		clearInterval(entry.handle);
		entry.fn();
	}
}
