import SchemaType from "common/src/sanity/SchemaType";
import { IconType } from "react-icons";
import { AiOutlineFolder } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiAlertTriangle } from "react-icons/fi";
import { TbComponents } from "react-icons/tb";
import { StructureBuilder } from "sanity/desk";

const blockItems: Array<{ schemaType: SchemaType; title: string; icon?: IconType }> = [
	{ schemaType: SchemaType.GLOBAL_COMP_INFO_BOX, title: "Info box", icon: AiOutlineInfoCircle },
	{ schemaType: SchemaType.GLOBAL_COMP_ALERT, title: "Alert box", icon: FiAlertTriangle },
];

const deskItems = (S: StructureBuilder) =>
	blockItems.map((item) => {
		return S.listItem()
			.title(item.title)
			.icon(item.icon || AiOutlineFolder)
			.child(
				S.documentTypeList(item.schemaType).title(item.title).filter(`_type == "${item.schemaType}"`)
			);
	});

export const globalComponentsStructure = (S: StructureBuilder) =>
	S.listItem()
		.title("Page components")
		.icon(TbComponents)
		.child(S.list().title("Global page components").items(deskItems(S)));
