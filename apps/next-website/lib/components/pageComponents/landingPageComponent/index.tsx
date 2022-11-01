import LandingPageSerializer from "@/lib/components/landingPage";
import { LandingPageBase as HomePageType } from "common/src/types/sanity/landingPage";

interface Props {
	landingPageDocument: HomePageType;
}

/**
 * This component is responsible for rendering any landing page
 */
export default function LandingPageComponent({ landingPageDocument }: Props): JSX.Element {
	return (
		<div>
			<h2>{landingPageDocument.title}</h2>
			<div className="flex flex-col gap-2">
				<LandingPageSerializer landingPage={landingPageDocument} />
			</div>
		</div>
	);
}
