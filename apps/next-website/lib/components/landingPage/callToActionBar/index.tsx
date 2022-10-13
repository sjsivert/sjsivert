import Link from "next/link";

import { PageItemCallToActionBar } from "@/lib/types/sanity/landingPage/pageItemCallToActionBar";

interface Props {
    data: PageItemCallToActionBar;
}

export default function LandingPageCallToActionBar({ data }: Props) {
    const bodyText = data.bodyText;
    const callToActionLabel = data.callToActionLabel;

    return (
        <div className="px-4 py-2 bg-red-400">
            <div>
                <p>{bodyText}</p>
                <Link href={data.callToActionUrl} passHref>
                    <a>{callToActionLabel}</a>
                </Link>
            </div>
        </div>
    );
}
