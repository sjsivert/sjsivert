import { footerStructure } from "./footer";
import { globalComponentsStructure } from "./globalComps";
import { headerStructure } from "./header";
import { pagesStructure } from "./pages";
import { StructureBuilder, StructureResolverContext } from "sanity/desk";

export const structure = (S: StructureBuilder, context: StructureResolverContext) =>
	S.list()
		.title("Content")
		.items([
			pagesStructure(S, context),
			globalComponentsStructure(S),
			S.divider(),
			headerStructure(S),
			footerStructure(S),
		]);
