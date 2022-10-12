import S from "@sanity/desk-tool/structure-builder";
import SchemaType from "common/sanity/SchemaType";
import { BiHome } from "react-icons/bi";
import Iframe from "sanity-plugin-iframe-pane";

import resolveProductionUrl from "../../../resolveProductionUrl";

const title = "Home Page";

export const homePageStructure = S.listItem()
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
						url: (doc) => resolveProductionUrl(doc),
					})
					.title("Preview"),
			])
	);
