import { structure } from "./deskStructure";
import { schemaTypes } from "./schemas";
import { languageFilter } from "@sanity/language-filter";
import { visionTool } from "@sanity/vision";
import { getDefaultLanguage, supportedLanguages } from "common/src/locales/languages";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

export default defineConfig({
	name: "default",
	title: "sanity-studio-intl",

	projectId: "i7nu7g9s",
	dataset: "development",

	plugins: [
		// Configure the desk tool
		deskTool({ structure }),
		// Vision for debugging groq
		visionTool(),
		// Configures locale/language support
		languageFilter({
			supportedLanguages,
			defaultLanguages: [getDefaultLanguage().id],
			filterField: (enclosingType, field, selectedLanguageIds) => {
				const langIds = supportedLanguages.map((lang) => lang.id);
				const notSelected = langIds.filter((langId) => {
					return !selectedLanguageIds.includes(langId);
				});
				return !notSelected.includes(field.name);
			},
		}),
	],

	schema: {
		types: schemaTypes,
	},
});
