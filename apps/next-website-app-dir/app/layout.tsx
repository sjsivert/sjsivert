import "../styles/globals.css";
import FooterComp from "@/lib/components/footer";
import MainMenuComp from "@/lib/components/mainMenu";
import { sanityConfig } from "@/lib/config/envVariables";
import { getMainMenuAndFooterData } from "common/src/content/sanity/allPages";

async function fetchData() {
	const mainMenuAndFooterData = await getMainMenuAndFooterData(sanityConfig);
	return mainMenuAndFooterData;
}
export const revalidate = 60;
export default async function RootLayout({
	children,
	preview,
}: {
	children: React.ReactNode;
	preview?: boolean;
}) {
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
