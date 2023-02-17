import "../../styles/globals.css";
import FooterComp from "@/lib/components/footer";
import MainMenuComp from "@/lib/components/mainMenu";
import { sanityConfig } from "@/lib/config/envVariables";
import { BaseParams } from "@/lib/types/pages";
import { getMainMenuAndFooterData } from "common/src/content/sanity-intl/allPages";
import { previewData } from "next/headers";

export const revalidate = 3600; // every hour

async function fetchData(lang: string) {
	const mainMenuAndFooterData = await getMainMenuAndFooterData(sanityConfig, lang);
	return mainMenuAndFooterData;
}

// default SEO
export const metadata = {
	title: {
		default: "Home",
		template: "%s | (TR) Next App dir",
	},
};

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: BaseParams;
}) {
	const preview = previewData() ? true : false;
	const mainMenuAndFooterData = await fetchData(params.lang);

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
