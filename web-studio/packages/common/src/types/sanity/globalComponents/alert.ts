import SchemaType from "@/sanity/SchemaType";
import { SanityDocument } from "@sanity/types";

import { Locale } from "@/types/sanity/common";

interface GlobalAlertBase extends SanityDocument {
	_type: SchemaType.GLOBAL_COMP_ALERT;
	alertType: "info" | "warn" | "error";
}

export interface GlobalAlert extends GlobalAlertBase {
	title: string;
	alertText: string;
}

export interface GlobalAlertSanityData extends GlobalAlertBase {
	title: Locale;
	alertText: Locale;
}
