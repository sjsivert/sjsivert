import SchemaType from "common/src/sanity/SchemaType";
import { RiLayoutBottomFill } from "react-icons/ri";
import { StructureBuilder } from "sanity/desk";

export const footerStructure = (S: StructureBuilder) =>
	S.listItem()
		.title("Footer")
		.schemaType(SchemaType.SITE_FOOTER)
		.icon(RiLayoutBottomFill)
		.child(S.document().schemaType(SchemaType.SITE_FOOTER).documentId(SchemaType.SITE_FOOTER));
