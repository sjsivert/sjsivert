import LandingPageSerializer from "@/lib/components/landingPage";
import { LandingPage as LandingPagePageType } from "@/lib/types/sanity/landingPage";

interface Props {
    landingPageDocument: LandingPagePageType;
}

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
