import LandingPageComponent from "@/lib/components/pageComponents/landingPageComponent";
import { sanityConfig } from "@/lib/config/envVariables";
import { getHomePageDocuments } from "common/src/content/sanity/homePage/";

async function getData(preview: boolean) {
	const pageData = await getHomePageDocuments(sanityConfig, preview);
	return pageData[0];
}

export default async function HomePage() {
	const page = await getData(false);
	return <LandingPageComponent landingPageDocument={page} />;
}
