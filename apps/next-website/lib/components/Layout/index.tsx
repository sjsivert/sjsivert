import { ReactNode } from "react";

import FooterComp from "@/lib/components/footer";
import MainMenuComp from "@/lib/components/mainMenu";
import { MainMenuAndFooter } from "@/lib/types/sanity/allPages";

interface Props {
	mainMenuAndFooterData: MainMenuAndFooter;
	previewActive?: boolean;
	children?: ReactNode | ReactNode[];
}

export default function Layout({ mainMenuAndFooterData, previewActive, children }: Props): JSX.Element {
	return (
		<div>
			<MainMenuComp mainMenuData={mainMenuAndFooterData.mainMenu} previewActive={previewActive} />
			<div className="container prose mx-auto mt-8 mb-24">
				<main className="px-4">{children}</main>
			</div>
			<FooterComp footerData={mainMenuAndFooterData.footer} />
		</div>
	);
}
