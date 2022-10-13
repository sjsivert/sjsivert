import SchemaType from "common/sanity/SchemaType";

import { SanityDocument, SanityObject } from "@/lib/types/sanity/common";

/**
 * A main menu item with an action
 * This is the item which can actually be clicked
 */
export interface MainMenuActionItem extends SanityObject {
    _type: SchemaType.MAIN_MENU_ACTION_ITEM_OBJECT;
    label: string;
    icon?: "home" | "document" | "newspaper";
    url: string;
}

/**
 * A main menu item which creates a sub-menu
 * with action items (see MainMenuActionItem)
 */
export interface MainMenuItem extends SanityObject {
    _type: SchemaType.MAIN_MENU_ITEM_OBJECT;
    label: string;
    subItems: Array<MainMenuActionItem>;
}

export interface MainMenu extends SanityDocument {
    menuItems: Array<MainMenuItem | MainMenuActionItem>;
}
