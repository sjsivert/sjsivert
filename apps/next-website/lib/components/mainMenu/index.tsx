import SchemaType from "common/sanity/SchemaType";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";

import { MainMenu } from "@/lib/types/sanity/allPages/mainMenu";

interface Props {
    mainMenuData: MainMenu;
    previewActive?: boolean;
}

export default function MainMenuComp({ mainMenuData, previewActive }: Props): JSX.Element {
    const items = mainMenuData.menuItems.map((item) => {
        if (item._type === SchemaType.MAIN_MENU_ACTION_ITEM_OBJECT) {
            let icon = <AiOutlineHome />;

            if (item.icon === "document") {
                icon = <RiArticleLine />;
            } else if (item.icon === "newspaper") {
                icon = <BsNewspaper />;
            }

            return (
                <li key={item._key} className="flex gap-1">
                    <div className="flex items-center">{icon}</div>
                    <Link href={item.url}>
                        <a className="no-underline text-white">{item.label}</a>
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
            <ul className="list-none flex gap-4 text-white p-4">{items}</ul>
        </header>
    );
}
