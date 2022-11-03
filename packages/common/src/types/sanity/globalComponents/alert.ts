import { SanityDocument } from "../common";
import SchemaType from "@/sanity/SchemaType";

export interface GlobalAlert extends SanityDocument {
	_type: SchemaType.GLOBAL_COMP_ALERT;
	title: string;
	alertText: string;
	alertType: "info" | "warn" | "error";
}
