/**
 * Strips a trailing slash from for example an url
 */
export function stripTrailingSlash(input: string): string {
	return input.replace(/\/$/, "");
}

/**
 * Strips a leading slash from a string
 */
export function stripLeadingSlash(input: string): string {
	return input.replace(/^\/+/g, "");
}

export function stripLeadingAndTrailingSlashes(input: string) {
	return stripTrailingSlash(stripLeadingSlash(input));
}
