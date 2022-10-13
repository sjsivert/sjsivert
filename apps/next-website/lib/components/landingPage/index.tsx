import SchemaType from "common/sanity/SchemaType";

import GlobalCompAlert from "@/lib/components/globalComponents/alert";
import GlobalCompInfoBox from "@/lib/components/globalComponents/infoBox";
import { GlobalAlert } from "@/lib/types/sanity/globalComponents/alert";
import { GlobalInfoBox } from "@/lib/types/sanity/globalComponents/infoBox";
import { LandingPageBase as LandingPageBaseType } from "@/lib/types/sanity/landingPage";
import { PageItemCallToActionBar } from "@/lib/types/sanity/landingPage/pageItemCallToActionBar";
import { PageItemHero } from "@/lib/types/sanity/landingPage/pageItemHero";

import LandingPageCallToActionBar from "./callToActionBar";
import LandingPageHero from "./hero";

interface Props {
    landingPage: LandingPageBaseType;
}

/**
 * This is the serializer for the Landing Page components
 * It takes a landing page and returns a Fragment element containing an array of components
 */
export default function LandingPageSerializer({ landingPage }: Props): JSX.Element {
    const comps = landingPage.pageItems.map((comp) => {
        switch (comp._type) {
            case SchemaType.LANDING_PAGE_ITEM_HERO:
                return <LandingPageHero data={comp as PageItemHero} />;
            case SchemaType.LANDING_PAGE_ITEM_CALL_TO_ACTION_BAR:
                return <LandingPageCallToActionBar data={comp as PageItemCallToActionBar} />;
            case SchemaType.GLOBAL_COMP_ALERT:
                return <GlobalCompAlert alertProps={comp as GlobalAlert} />;
            case SchemaType.GLOBAL_COMP_INFO_BOX:
                return <GlobalCompInfoBox infoBoxProps={comp as GlobalInfoBox} />;
            default:
                return <p>Default component</p>;
        }
    });

    return <>{comps}</>;
}
