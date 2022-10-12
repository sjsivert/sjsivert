import { SanityDocument, SanityObject } from "@/lib/types/sanity/common";

/**
 * A main menu item with an action
 * This is the item which can actually be clicked
 */
export interface MainMenuActionItem extends SanityObject {
    _type: "mainMenuActionItem";
    label: string;
    icon?: string;
    url: string;
}

/**
 * A main menu item which creates a sub-menu
 * with action items (see MainMenuActionItem)
 */
export interface MainMenuItem extends SanityObject {
    _type: "mainMenuItem";
    label: string;
    subItems: Array<MainMenuActionItem>;
}

export interface MainMenu extends SanityDocument {
    menuItems: Array<MainMenuItem | MainMenuActionItem>;
}
