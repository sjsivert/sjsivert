import { supportedLanguages } from "common/src/locales/languages";
import { defineField, defineType } from "sanity";

/**
 * Defines a string type with language support
 * It uses all supported languages to generate fields for each language
 */
export default defineType({
	title: "Localized string",
	name: "localeString",
	type: "object",
	fieldsets: [
		{
			title: "Translations",
			name: "translations",
			options: { collapsible: true },
		},
	],
	fields: supportedLanguages.map((lang) => {
		return defineField({
			title: lang.title,
			name: lang.id,
			type: "string",
			fieldset: "translations",
		});
	}),
});
