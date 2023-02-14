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
