import { Locale } from "../types/sanity/common";

export interface LanguageItem {
	id: string;
	title: string;
	isDefault?: boolean;
}

/**
 * Define the available languages
 */
export const supportedLanguages: Array<LanguageItem> = [
	{ id: "en", title: "English", isDefault: true },
	{ id: "no", title: "Norwegian" },
];

export function getDefaultLanguage(): LanguageItem {
	const found = supportedLanguages.find((item) => item.isDefault);
	if (found) return found;
	return supportedLanguages[0];
}

/**
 * Takes a Sanity locale field and returns the string denoted by the current locale
 * If the current locale is not found in the field/object, the default locale is used
 */
export function getLocalizedStringForLocaleObject(localeField: Locale | string, currentLocale: string): string {
	if (typeof localeField === "string") return localeField;
	const defaultLangId = getDefaultLanguage().id;
	return localeField[currentLocale] || localeField[defaultLangId];
}
