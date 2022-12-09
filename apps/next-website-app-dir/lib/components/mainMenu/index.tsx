import SchemaType from "common/src/sanity/SchemaType";
import { MainMenu, MainMenuActionItem } from "common/src/types/sanity/allPages/mainMenu";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";

interface Props {
	mainMenuData: MainMenu;
	previewActive?: boolean;
}

export default function MainMenuComp({ mainMenuData, previewActive }: Props): JSX.Element {
	const items = mainMenuData.menuItems.map((item) => {
		if (item._type === SchemaType.MAIN_MENU_ACTION_ITEM_OBJECT) {
			const typedItem = item as MainMenuActionItem;
			let icon = <AiOutlineHome />;

			if (typedItem.icon === "document") {
				icon = <RiArticleLine />;
			} else if (item.icon === "newspaper") {
				icon = <BsNewspaper />;
			}

			return (
				<li key={item._key} className="flex gap-1">
					<div className="flex items-center">{icon}</div>
					<Link className="text-white no-underline" href={item.url}>
						{item.label}
					</Link>
				</li>
			);
		} else {
			return (
				<li key={item._key} className="text-gray-400">
					{item.label}
				</li>
			);
		}
	});

	return (
		<header className="bg-slate-500 px-2">
			<ul className="flex list-none gap-4 p-4 text-white">{items}</ul>
		</header>
	);
}
