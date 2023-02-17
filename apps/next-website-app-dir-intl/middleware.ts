import { getDefaultLanguage, supportedLanguages } from "common/src/locales/languages";
import { stripLeadingAndTrailingSlashes } from "common/src/utils/stringUtils";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	// The name for the locale cookie
	const localeCookieName = "_locale";
	// Get a list of supported language ids (locales)
	const supportedLocales = supportedLanguages.map((sl) => sl.id);

	// Check if there is any supported locale in the pathname
	const pathname = request.nextUrl.pathname;
	const match = pathname.match(/^\/[^\/]{2,}/gm);
	let currentLocale = null;
	if (Array.isArray(match) && match.length > 0) {
		const tmp = stripLeadingAndTrailingSlashes(match[0]);
		if (supportedLocales.includes(tmp)) {
			// set the locale in the pathname as the current locale
			currentLocale = tmp;
		}
	}

	if (currentLocale) {
		// The path has a locale
		const response = NextResponse.next();
		// Set the locale cookie
		response.cookies.set(localeCookieName, currentLocale);
		// And carry on
		return response;
	} else {
		// If there is no locale in the pathname
		// Get the default locale (this is the fallback)
		let locale = getDefaultLanguage().id;

		// Check for cookie and set the cookie
		const localeCookie = request.cookies.get(localeCookieName);
		if (localeCookie && localeCookie.value && supportedLocales.includes(localeCookie.value)) {
			// There is a valid locale cookie set, let's use it
			locale = localeCookie.value;
		}

		// e.g. incoming request is /products
		// The new URL is now /en-US/products
		const response = NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
		response.cookies.set(localeCookieName, locale);
		return response;
	}
}

export const config = {
	matcher: [
		// Skip all internal paths (_next) and other ...stuff
		"/((?!api|robots.txt|sitemap.xml|_next/static|_next/image|favicon.ico).*)",
	],
};
