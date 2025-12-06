/**
 * Interface representing an emoji with a name, content, and type.
 */
interface EmojisCollection {
	content: string;
	name: string;
	type: string;
}

/**
 * Interface representing an emoji with a name and content.
 */
interface Emojis {
	content: string;
	name: string;
}

/**
 * Interface representing the response from an API endpoint.
 */
interface ApiResponse {
	success: boolean;
	status: number;
	info: {
		category: string;
		endpoint: string;
	};
	message: string;
}

/**
 * Kaomojis class for accessing random kaomoji endpoints.
 */
declare class Kaomojis {
	constructor();

	/**
	 * Get a random cat kaomoji.
	 */
	cat(): Promise<ApiResponse>;

	/**
	 * Get a random dog kaomoji.
	 */
	dog(): Promise<ApiResponse>;

	/**
	 * Get a random OwO kaomoji.
	 */
	owo(): Promise<ApiResponse>;

	/**
	 * Get a random UwU kaomoji.
	 */
	uwu(): Promise<ApiResponse>;

	/**
	 * Get a random love kaomoji.
	 */
	love(): Promise<ApiResponse>;
}

declare namespace RandomEmoji {
	/**
	 * Returns a random emoji from a large collection.
	 * Each emoji includes its name and type.
	 */
	function emojis(): EmojisCollection;

	/**
	 * Returns a random cat emoji.
	 */
	function cats(): Emojis;

	/**
	 * Returns a random circle emoji.
	 */
	function circles(): Emojis;

	/**
	 * Returns a random food emoji.
	 */
	function foods(): Emojis;

	/**
	 * Returns a random heart emoji.
	 */
	function hearts(): Emojis;

	/**
	 * Returns a random square emoji.
	 */
	function squares(): Emojis;

	/**
	 * Returns a random Unicode emoji character.
	 */
	function unicode(): string;

	/**
	 * The current version of the module.
	 */
	const version: string;

	export { Kaomojis };
}

export = RandomEmoji;
