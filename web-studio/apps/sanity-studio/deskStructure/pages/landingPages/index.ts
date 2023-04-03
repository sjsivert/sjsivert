import resolveProductionUrl from "../../../resolveProductionUrl";
import SchemaType from "common/src/sanity/SchemaType";
import { CgWebsite } from "react-icons/cg";
import Iframe from "sanity-plugin-iframe-pane";
import { StructureBuilder, StructureResolverContext } from "sanity/desk";

export const landingPageStructure = (S: StructureBuilder, context: StructureResolverContext) =>
	S.listItem()
		.title("Landing pages")
		.icon(CgWebsite)
		.child(
			S.documentList()
				.title("All landing pages")
				.menuItems(S.documentTypeList(SchemaType.PAGE_LANDING_PAGE).getMenuItems()!)
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
									url: (doc: any) => resolveProductionUrl(doc, context),
								})
								.title("Preview"),
						])
				)
		);
