import { getDefaultLanguage } from "common/src/locales/languages";
import { CustomValidator, CustomValidatorResult } from "sanity";

/**
 * The locale string default language is required and must contain at least 3 chars
 */
export const localeStringValidator: CustomValidator = (localeString, context): CustomValidatorResult => {
	// The default language must have a value
	const defaultLang = getDefaultLanguage();
	const errorMessage = `The default language (${defaultLang.title}) must have a value (min ${3} chars).`;
	if (!localeString) return errorMessage;

	const defaultField = (localeString as any)[defaultLang.id];
	if (defaultField && defaultField.length >= 3) return true;
	return errorMessage;
};

/**
 * The locale text default validator must be at least 3 chars
 */
export const localeTextValidator: CustomValidator = (localeText): CustomValidatorResult => {
	const defaultLang = getDefaultLanguage();
	const errorMessage = `The description for the default language (${defaultLang.title}) must be min 3 chars`;
	if (!localeText) return errorMessage;

	const defaultField = (localeText as any)[defaultLang.id];
	if (defaultField && defaultField.length >= 3) return true;
	return errorMessage;
};
