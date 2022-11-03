import { SanityDocument } from "../common";
import SchemaType from "@/sanity/SchemaType";

export interface GlobalInfoBox extends SanityDocument {
	_type: SchemaType.GLOBAL_COMP_INFO_BOX;
	title: string;
	infoText: string;
}
