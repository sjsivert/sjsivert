import SchemaType from "@/sanity/SchemaType";
import { SanityDocument } from "@sanity/types";

export interface GlobalInfoBox extends SanityDocument {
	_type: SchemaType.GLOBAL_COMP_INFO_BOX;
	title: string;
	infoText: string;
}
