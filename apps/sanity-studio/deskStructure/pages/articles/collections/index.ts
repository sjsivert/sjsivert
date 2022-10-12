import S from "@sanity/desk-tool/structure-builder";
import SchemaType from "common/sanity/SchemaType";
import { AiFillFolder, AiFillTag, AiOutlineBuild } from "react-icons/ai";

const articleCollectionsUrlPathTitle = "Collections";

export const collectionsStructure = S.listItem()
	.title(articleCollectionsUrlPathTitle)
	.schemaType(SchemaType.ARTICLE_COLLECTION_URL_PATH)
	.icon(AiFillFolder)
	.child(S.documentTypeList(SchemaType.ARTICLE_COLLECTION_URL_PATH).title(articleCollectionsUrlPathTitle));
