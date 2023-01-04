import SchemaType from "common/src/sanity/SchemaType";
import { MainMenu, MainMenuActionItem } from "common/src/types/sanity/allPages/mainMenu";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";
import Alert from "ui/Alert";

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
				<div key={item._key} className="flex flex-row gap-1 text-white">
					<div className="mr-2 flex items-center">{icon}</div>
					<Link className="no-underline" href={item.url}>
						{item.label}
					</Link>
				</div>
			);
		} else {
			return null;
			// return (
			// 	<div
			// 		key={item._key}
			// 		className="block mt-4 md:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
			// 	>
			// 		{item.label}
			// 	</div>
			// );
		}
	});

	return (
		<header className="bg-slate-500">
			{previewActive && (
				<Alert alertType="warn">
					Preview is active {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
					<a href="/api/exit-preview" className="text-blue-400 underline">
						Disable preview mode
					</a>
				</Alert>
			)}
			<nav className="flex flex-wrap items-center justify-between bg-slate-500 p-6">
				<div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
					<div className="flex flex-col gap-4 md:flex-row">{items}</div>
				</div>
			</nav>
		</header>
	);
}
