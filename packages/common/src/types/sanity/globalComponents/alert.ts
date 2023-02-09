import SchemaType from "@/sanity/SchemaType";
import { SanityDocument } from "@sanity/types";

export interface GlobalAlert extends SanityDocument {
	_type: SchemaType.GLOBAL_COMP_ALERT;
	title: string;
	alertText: string;
	alertType: "info" | "warn" | "error";
}
