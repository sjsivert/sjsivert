import { supportedLanguages } from "common/src/locales/languages";
import { defineField, defineType } from "sanity";

export default defineType({
	title: "Localized text",
	name: "localeText",
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
			type: "text",
			fieldset: "translations",
		});
	}),
});
