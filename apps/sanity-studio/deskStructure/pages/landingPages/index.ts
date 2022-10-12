import S from "@sanity/desk-tool/structure-builder";
import SchemaType from "common/sanity/SchemaType";
import { CgWebsite } from "react-icons/cg";
import Iframe from "sanity-plugin-iframe-pane";

import resolveProductionUrl from "../../../resolveProductionUrl";

export const landingPageStructure = S.listItem()
	.title("Landing pages")
	.icon(CgWebsite)
	.child(
		S.documentList()
			.title("All landing pages")
			.menuItems(S.documentTypeList(SchemaType.PAGE_LANDING_PAGE).getMenuItems())
			.filter(`_type == "${SchemaType.PAGE_LANDING_PAGE}"`)
			.child((documentId) =>
				S.document()
					.documentId(documentId)
					.schemaType(SchemaType.PAGE_LANDING_PAGE)
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
