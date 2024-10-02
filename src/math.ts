/**
 * Clamps the {@link value} between the {@link min} and {@link max}.
 * @param value Value to clamp.
 * @param min Minimum value.
 * @param max Maximum value.
 * @returns Clamped value.
 */
export function clamp(value: number, min: number, max: number): number {
	return Math.min(Math.max(value, min), max);
}
