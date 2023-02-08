/**
 * Constructs the SEO title
 * @param title
 * @returns
 */
export function getSEOTitle(title?: string): string {
	if (title) {
		return `${title} | (TR) Next App dir`;
	}
	return "Home | (TR) Next App dir";
}
