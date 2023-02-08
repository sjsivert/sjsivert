import "../styles/globals.css";
import FooterComp from "@/lib/components/footer";
import MainMenuComp from "@/lib/components/mainMenu";
import { sanityConfig } from "@/lib/config/envVariables";
import { getMainMenuAndFooterData } from "common/src/content/sanity/allPages";
import { DefaultSeo } from "next-seo";
import { previewData } from "next/headers";

export const revalidate = 3600; // every hour

async function fetchData() {
	const mainMenuAndFooterData = await getMainMenuAndFooterData(sanityConfig);
	return mainMenuAndFooterData;
}

// default SEO
export const metadata = {
	title: {
		default: "Home",
		template: "%s | (TR) Next App dir",
	},
	openGraph: {
		title: "(TR) Next App dir",
		locale: "en-US",
		type: "website",
	},
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const preview = previewData() ? true : false;
	const mainMenuAndFooterData = await fetchData();

	return (
		<html lang="en">
			<body>
				<div>
					<MainMenuComp mainMenuData={mainMenuAndFooterData.mainMenu} previewActive={preview} />
					<div className="container prose mx-auto mt-8 mb-24">
						<main className="px-4">{children}</main>
					</div>
					<FooterComp footerData={mainMenuAndFooterData.footer} />
				</div>
			</body>
		</html>
	);
}
