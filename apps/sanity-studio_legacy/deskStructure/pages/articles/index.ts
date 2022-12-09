import S from "@sanity/desk-tool/structure-builder";
import { RiArticleLine } from "react-icons/ri";

import { allArticles } from "./articlesAll";
import { categoriesStructure } from "./categories";
import { collectionsStructure } from "./collections";

export const articleStructure = S.listItem()
	.title("Dynamic articles")
	.icon(RiArticleLine)
	.child(S.list().title("All articles").items([allArticles, collectionsStructure, categoriesStructure]));
