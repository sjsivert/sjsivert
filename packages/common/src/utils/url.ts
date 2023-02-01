import { stripTrailingSlash } from "./stringUtils";

/**
 * You can pass the env var DOMAIN_NAME (Vercel)
 * It returns a full url with the correct protocol (http for localhost otherwise https)
 * @param domainName
 * @returns
 */
export function getFullUrlFromDomain(domainName: string): string {
	const protocol = domainName.includes("localhost") ? "http" : "https";
	return `${protocol}://${stripTrailingSlash(domainName)}`;
}
