/**
 * Request for Govee.
 */
export type GoveeRequest<T> = {
	/**
	 * Payload of the request.
	 */
	payload: T;

	/**
	 * Unique identifier that identifies the request from a response.
	 */
	requestId: string;
};

/**
 * Response from Govee.
 */
export type GoveeResponse = {
	/**
	 * State code of the Response.
	 */
	code: number;

	/**
	 * Supporting message.
	 */
	msg: string;

	/**
	 * Unique identifier supplied in the {@link GoveeRequest}.
	 */
	requestId: string;
};
