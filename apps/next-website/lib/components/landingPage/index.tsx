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
                const heroComp = comp as PageItemHero;
                return <LandingPageHero data={heroComp} key={heroComp._key} />;
            case SchemaType.LANDING_PAGE_ITEM_CALL_TO_ACTION_BAR:
                const ctaComp = comp as PageItemCallToActionBar;
                return <LandingPageCallToActionBar data={ctaComp} key={ctaComp._key} />;
            case SchemaType.GLOBAL_COMP_ALERT:
                const glAlertComp = comp as GlobalAlert;
                return <GlobalCompAlert alertProps={glAlertComp} key={glAlertComp._id} />;
            case SchemaType.GLOBAL_COMP_INFO_BOX:
                const glInfoBoxComp = comp as GlobalInfoBox;
                return <GlobalCompInfoBox infoBoxProps={glInfoBoxComp} key={glInfoBoxComp._id} />;
            default:
                return <p key={Math.random()}>Default component</p>;
        }
    });

    return <>{comps}</>;
}
