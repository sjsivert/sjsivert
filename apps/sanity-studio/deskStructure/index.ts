import S from "@sanity/desk-tool/structure-builder";

import { footerStructure } from "./footer";
import { globalComponentsStructure } from "./globalComps";
import { headerStructure } from "./header";
import { pagesStructure } from "./pages";

export default S.list()
	.title("Content")
	.items([pagesStructure, globalComponentsStructure, S.divider(), headerStructure, footerStructure]);
