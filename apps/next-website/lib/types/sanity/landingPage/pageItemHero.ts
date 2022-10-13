import SchemaType from "common/sanity/SchemaType";

import { AccessibleImage } from "@/lib/types/sanity/accessibleImage";

export interface PageItemHero {
    _type: SchemaType.LANDING_PAGE_ITEM_HERO;
    _key: string;

    // Settings (all required)
    layout: "imageLeft" | "imageRight";
    purpose: "header" | "section";
    colorScheme: "light" | "grey" | "dark";
    backgroundImage?: AccessibleImage;

    // Image area
    heroImage: AccessibleImage;

    // Text area
    title: string;
    bodyText: string;
    callToActionType: "button" | "link";
    callToActionLabel: string;
    callToActionUrl: string;
}
