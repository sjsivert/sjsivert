export interface SanityObject {
	_key: string;
	_type: string;
}

/**
 * Used to indicate a key value locale object when the keys are not known
 * @example
 * {
 * 	"en":"something",
 * 	"no":"something"
 * }
 */
export type Locale = { [key: string]: string };
