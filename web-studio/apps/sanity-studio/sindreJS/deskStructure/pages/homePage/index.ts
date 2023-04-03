import resolveProductionUrl from "../../../resolveProductionUrl";
import SchemaType from "common/src/sanity/SchemaType";
import { BiHome } from "react-icons/bi";
import Iframe from "sanity-plugin-iframe-pane";
import { StructureBuilder, StructureResolverContext } from "sanity/desk";

const title = "Home Page";

export const homePageStructure = (S: StructureBuilder, context: StructureResolverContext) =>
	S.listItem()
		.title(title)
		.schemaType(SchemaType.PAGE_HOME)
		.icon(BiHome)
		.child(
			S.document()
				.schemaType(SchemaType.PAGE_HOME)
				.documentId(SchemaType.PAGE_HOME)
				.views([
					S.view.form(),
					S.view
						.component(Iframe)
						.options({
							url: (doc: any) => resolveProductionUrl(doc, context),
						})
						.title("Preview"),
				])
		);
