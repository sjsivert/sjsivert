import SchemaType from "@/sanity/SchemaType";
import { SanityDocument } from "@sanity/types";

import { Locale, SanityObject } from "../common";

/**
 * A main menu item with an action
 * This is the item which can actually be clicked
 */
interface MainMenuActionItemBase extends SanityObject {
	_type: SchemaType.MAIN_MENU_ACTION_ITEM_OBJECT;
	icon?: "home" | "document" | "newspaper";
	url: string;
}

export interface MainMenuActionItem extends MainMenuActionItemBase {
	label: string;
}

export interface MainMenuActionItemSanityData extends MainMenuActionItemBase {
	label: Locale;
}

/**
 * A main menu item which creates a sub-menu
 * with action items (see MainMenuActionItem)
 */
export interface MainMenuItemBase extends SanityObject {
	_type: SchemaType.MAIN_MENU_ITEM_OBJECT;
}

export interface MainMenuItem extends MainMenuItemBase {
	label: string;
	subItems: Array<MainMenuActionItem>;
}

export interface MainMenuItemSanityData extends MainMenuItemBase {
	label: Locale;
	subItems: Array<MainMenuActionItemSanityData>;
}

export interface MainMenu extends SanityDocument {
	menuItems: Array<MainMenuItem | MainMenuActionItem>;
}

export interface MainMenuSanityData extends SanityDocument {
	menuItems: Array<MainMenuItemSanityData | MainMenuActionItemSanityData>;
}
