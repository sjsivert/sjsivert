import type { Handle } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";
import { supportedLanguages, getDefaultLanguage } from "common/src/locales/languages";
import { stripLeadingAndTrailingSlashes } from "common/src/utils/stringUtils";

/**
 * This hook/middleware runs for each request
 * @see https://kit.svelte.dev/docs/hooks#server-hooks
 */
export const handle: Handle = async ({ event, resolve }) => {
	// ## Preview handler
	// If there is a preview cookie, then enable preview for all routes
	event.locals.preview = event.cookies.get("preview") ? true : false;

	if (event.locals.preview) {
		// We don't want caching when preview is active
		event.setHeaders({ "cache-control": "no-cache, no-store, must-revalidate", Pragma: "no-cache", Expires: "0" });
	}

	// The name for the locale cookie
	const localeCookieName = "_locale";
	// Get a list of supported language ids (locales)
	const supportedLocales = supportedLanguages.map((sl) => sl.id);

	// Check if there is any supported locale in the pathname
	const pathname = event.url.pathname;
	const match = pathname.match(/^\/[^/]{2,}/gm);
	let currentLocale = null;
	if (Array.isArray(match) && match.length > 0) {
		const tmp = stripLeadingAndTrailingSlashes(match[0]);
		if (supportedLocales.includes(tmp)) {
			// set the locale in the pathname as the current locale
			currentLocale = tmp;
		}
	}
	if (currentLocale) {
		event.cookies.set(localeCookieName, currentLocale, { path: "/" });
		event.locals.locale = currentLocale;
		const response = await resolve(event);
		return response;
	} else {
		// If there is no locale in the pathname
		// Get the default locale (this is the fallback)
		let locale = getDefaultLanguage().id;

		// Check for cookie and set the cookie
		const localeCookie = event.cookies.get(localeCookieName);
		if (localeCookie && localeCookie && supportedLocales.includes(localeCookie)) {
			// There is a valid locale cookie set, let's use it
			locale = localeCookie;
		}

		// e.g. incoming request is /products
		// The new URL is now /en-US/products
		event.locals.locale = locale;
		event.cookies.set(localeCookieName, locale, { path: "/" });
		const path = new URL(`${locale}${pathname}`, event.url.origin);
		throw redirect(302, path.toString());
	}
};
