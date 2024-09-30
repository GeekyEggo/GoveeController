/**
 * Cache of functions scheduled for debouncing.
 */
const cache = new Map<
	string,
	{
		/**
		 * Function that will occur once the timeout expires.
		 */
		fn: () => void;

		/**
		 * Handle responsible for the timeout.
		 */
		handle?: NodeJS.Timeout;
	}
>();


/**
 * Schedules the {@link fn} function to be executed; calling this function again with the same {@link id} will cause the previous {@link fn} execution to be debounced.
 * @param id Debounce identifier.
 * @param fn Function to execute after timeout.
 * @param ms Timeout in milliseconds.
 */
export function debounce(id: string, fn: () => void, ms: number = 1000): void {
	const entry = cache.get(id);
	if (entry !== undefined) {
		clearTimeout(entry.handle);
	}

	const debouncedFn = (): void => {
		fn();
		cache.delete(id);
	};

	cache.set(id, {
		fn: debouncedFn,
		handle: setTimeout(debouncedFn, ms)
	});
}

/**
 * Clears the debounced function associated with the {@link id}.
 * @param id Debounce identifier.
 */
export function clearDebounce(id: string): void {
	const entry = cache.get(id);
	if (entry !== undefined) {
		clearInterval(entry.handle);
	}
}
