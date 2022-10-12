import S from "@sanity/desk-tool/structure-builder";
import SchemaType from "common/sanity/SchemaType";
import { AiFillFolder, AiFillTag, AiOutlineBuild } from "react-icons/ai";

const articleCategory = "Categories";

export const categoriesStructure = S.listItem()
	.title(articleCategory)
	.schemaType(SchemaType.ARTICLE_CATEGORY)
	.icon(AiFillFolder)
	.child(S.documentTypeList(SchemaType.ARTICLE_CATEGORY).title(articleCategory));
