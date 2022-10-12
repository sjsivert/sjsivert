import { AccessibleImage } from "@/lib/types/sanity/accessibleImage";

import { ComponentType } from "./index";

export interface PageItemHero {
    _type: ComponentType.HERO;
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
