import SchemaType from "@/sanity/SchemaType";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";

import { Locale } from "@/types/sanity/common";

export interface AccessibleImage extends SanityImageObject {
	_type?: SchemaType.ACCESSIBLE_IMAGE;
	alt?: string;
	caption?: string;
}

export interface AccessibleImageIntl extends SanityImageObject {
	_type?: SchemaType.ACCESSIBLE_IMAGE_INTL;
	alt?: Locale;
	caption?: Locale;
}
