import S from "@sanity/desk-tool/structure-builder";
import SchemaType from "common/sanity/SchemaType";
import { BsFillMenuButtonWideFill } from "react-icons/bs";

export const headerStructure = S.listItem()
	.title("Main menu")
	.schemaType(SchemaType.MAIN_MENU)
	.icon(BsFillMenuButtonWideFill)
	.child(S.document().schemaType(SchemaType.MAIN_MENU).documentId(SchemaType.MAIN_MENU));
