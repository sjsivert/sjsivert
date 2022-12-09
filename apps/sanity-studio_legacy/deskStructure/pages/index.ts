import S from "@sanity/desk-tool/structure-builder";
import { MdWebStories } from "react-icons/md";

import { articleStructure } from "./articles";
import { homePageStructure } from "./homePage";
import { landingPageStructure } from "./landingPages";

export const pagesStructure = S.listItem()
	.title("Pages")
	.icon(MdWebStories)
	.child(
		S.list()
			.title("Pages")
			.items([landingPageStructure, articleStructure, S.divider(), homePageStructure])
	);
