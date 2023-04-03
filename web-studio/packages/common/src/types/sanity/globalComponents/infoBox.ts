import SchemaType from "@/sanity/SchemaType";
import { SanityDocument } from "@sanity/types";

import { Locale } from "@/types/sanity/common";

interface GlobalInfoBoxBase extends SanityDocument {
	_type: SchemaType.GLOBAL_COMP_INFO_BOX;
}

export interface GlobalInfoBox extends GlobalInfoBoxBase {
	title: string;
	infoText: string;
}

export interface GlobalInfoBoxSanityData extends GlobalInfoBoxBase {
	title: Locale;
	infoText: Locale;
}
