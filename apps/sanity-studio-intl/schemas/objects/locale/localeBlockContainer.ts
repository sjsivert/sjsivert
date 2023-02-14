import { supportedLanguages } from "common/src/locales/languages";

/**
 * This is a locale wrapper for the «blockContainer»
 * You should not edit this file, just use it as a type for any block content
 */
export default {
	name: "localeBlockContainer",
	title: "Block Container",
	type: "object",
	fields: supportedLanguages.map((lang) => {
		return {
			title: lang.title,
			name: lang.id,
			type: "blockContainer",
		};
	}),
};
