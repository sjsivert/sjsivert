import LandingPageCallToActionBar from "./callToActionBar";
import LandingPageHero from "./hero";
import GlobalCompAlert from "@/lib/components/globalComponents/alert";
import GlobalCompInfoBox from "@/lib/components/globalComponents/infoBox";
import SchemaType from "common/src/sanity/SchemaType";
import { GlobalAlert } from "common/src/types/sanity/globalComponents/alert";
import { GlobalInfoBox } from "common/src/types/sanity/globalComponents/infoBox";
import { LandingPageBase as LandingPageBaseType } from "common/src/types/sanity/landingPage";
import { PageItemCallToActionBar } from "common/src/types/sanity/landingPage/pageItemCallToActionBar";
import { PageItemHero } from "common/src/types/sanity/landingPage/pageItemHero";

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
				return <LandingPageHero data={comp} key={comp._key} />;
			case SchemaType.LANDING_PAGE_ITEM_CALL_TO_ACTION_BAR:
				return <LandingPageCallToActionBar data={comp} key={comp._key} />;
			case SchemaType.GLOBAL_COMP_ALERT:
				return <GlobalCompAlert alertProps={comp} key={comp._id} />;
			case SchemaType.GLOBAL_COMP_INFO_BOX:
				return <GlobalCompInfoBox infoBoxProps={comp} key={comp._id} />;
			default:
				return <p key={Math.random()}>Default component</p>;
		}
	});

	return <>{comps}</>;
}
