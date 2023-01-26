import SchemaType from "common/src/sanity/SchemaType";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { StructureBuilder } from "sanity/desk";

export const headerStructure = (S: StructureBuilder) =>
	S.listItem()
		.title("Main menu")
		.schemaType(SchemaType.MAIN_MENU)
		.icon(BsFillMenuButtonWideFill)
		.child(S.document().schemaType(SchemaType.MAIN_MENU).documentId(SchemaType.MAIN_MENU));
