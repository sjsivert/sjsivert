import SchemaType from "common/src/sanity/SchemaType";
import { AiFillFolder } from "react-icons/ai";
import { StructureBuilder } from "sanity/desk";

const articleCategory = "Categories";

export const categoriesStructure = (S: StructureBuilder) =>
	S.listItem()
		.title(articleCategory)
		.schemaType(SchemaType.ARTICLE_CATEGORY)
		.icon(AiFillFolder)
		.child(S.documentTypeList(SchemaType.ARTICLE_CATEGORY).title(articleCategory));
