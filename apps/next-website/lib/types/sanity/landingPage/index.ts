import SchemaType from "common/sanity/SchemaType";

import { SanityDocument } from "@/lib/types/sanity/common";
import { GlobalAlert } from "@/lib/types/sanity/globalComponents/alert";
import { GlobalInfoBox } from "@/lib/types/sanity/globalComponents/infoBox";

import { PageItemArticleSection } from "./pageItemArticleSection";
import { PageItemCallToActionBar } from "./pageItemCallToActionBar";
import { PageItemHero } from "./pageItemHero";

export type LandingPageComponents =
    | PageItemHero
    | PageItemArticleSection
    | PageItemCallToActionBar
    | GlobalAlert
    | GlobalInfoBox;

/**
 * Defines the data for a Home page document
 */
export interface HomePage extends SanityDocument {
    _type: SchemaType.PAGE_HOME;
    title: string;
    description: string;
    pageItems: Array<LandingPageComponents>;
}

/**
 * A general LandingPage is a HomePage with a slug
 */
export interface LandingPage extends HomePage {
    slug: string;
}
