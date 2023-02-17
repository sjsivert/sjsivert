import SchemaType from "@/sanity/SchemaType";

import { getLocalizedStringForLocaleObject } from "../../../locales/languages";
import { AccessibleImage, AccessibleImageIntl } from "../../../types/sanity/accessibleImage";

/**
 * Takes a localized AccessibleImage and returns a
 * version where the correct language strings have been selected
 */
export function handleLocalizationForAccessibleImage(image: AccessibleImageIntl, lang: string): AccessibleImage {
	const output: AccessibleImage = {
		...image,
		alt: undefined,
		caption: undefined,
		_type: SchemaType.ACCESSIBLE_IMAGE,
	};

	if (image.alt) {
		output.alt = getLocalizedStringForLocaleObject(image.alt, lang);
	}
	if (image.caption) {
		getLocalizedStringForLocaleObject(image.caption, lang);
	}

	return output;
}
