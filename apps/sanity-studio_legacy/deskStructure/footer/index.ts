import S from "@sanity/desk-tool/structure-builder";
import SchemaType from "common/src/sanity/SchemaType";
import { RiLayoutBottomFill } from "react-icons/ri";

export const footerStructure = S.listItem()
	.title("Footer")
	.schemaType(SchemaType.SITE_FOOTER)
	.icon(RiLayoutBottomFill)
	.child(S.document().schemaType(SchemaType.SITE_FOOTER).documentId(SchemaType.SITE_FOOTER));
