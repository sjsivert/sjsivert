import SchemaType from "common/src/sanity/SchemaType";
import { AiFillFolder } from "react-icons/ai";
import { StructureBuilder } from "sanity/desk";

const articleCollectionsUrlPathTitle = "Collections";

export const collectionsStructure = (S: StructureBuilder) =>
	S.listItem()
		.title(articleCollectionsUrlPathTitle)
		.schemaType(SchemaType.ARTICLE_COLLECTION_URL_PATH)
		.icon(AiFillFolder)
		.child(
			S.documentTypeList(SchemaType.ARTICLE_COLLECTION_URL_PATH).title(articleCollectionsUrlPathTitle)
		);
