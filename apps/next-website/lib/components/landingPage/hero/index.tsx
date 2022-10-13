import Link from "next/link";

import { PageItemHero } from "@/lib/types/sanity/landingPage/pageItemHero";

interface Props {
    data: PageItemHero;
}

export default function LandingPageHero({ data }: Props) {
    const title = data.title;
    const bodyText = data.bodyText;
    const callToActionLabel = data.callToActionLabel;

    return (
        <div>
            <h2>{title}</h2>
            <p>{bodyText}</p>
            <Link href={data.callToActionUrl}>
                <a>{callToActionLabel}</a>
            </Link>
        </div>
    );
}
