/**
 * returns the base url for the app
 * Note that the «VERCEL_URL» env var is a Vercel system variable
 */
export function getBaseUrl() {
	if (typeof process.env.VERCEL_URL === "string") {
		const protocol = process.env.VERCEL_URL.includes("localhost:3000") ? "http" : "https";
		return `${protocol}://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
	}
	return "http://localhost:3000";
}
