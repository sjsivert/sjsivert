import S from "@sanity/desk-tool/structure-builder";
import SchemaType from "common/src/sanity/SchemaType";
import { RiArticleLine } from "react-icons/ri";
import Iframe from "sanity-plugin-iframe-pane";

import resolveProductionUrl from "../../../../resolveProductionUrl";

const articlePageTitle = "All articles";
export const allArticles = S.listItem()
	.title(articlePageTitle)
	.schemaType(SchemaType.PAGE_ARTICLE)
	.icon(RiArticleLine)
	.child(
		S.documentList()
			.title(articlePageTitle)
			.menuItems(S.documentTypeList(SchemaType.PAGE_ARTICLE).getMenuItems())
			.filter(`_type == "${SchemaType.PAGE_ARTICLE}"`)
			.child((documentId) =>
				S.document()
					.documentId(documentId)
					.schemaType(SchemaType.PAGE_ARTICLE)
					.views([
						S.view.form(),
						S.view
							.component(Iframe)
							.options({
								url: (doc) => resolveProductionUrl(doc),
							})
							.title("Preview"),
					])
			)
	);
