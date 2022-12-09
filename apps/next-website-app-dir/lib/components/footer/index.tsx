import { Footer } from "common/src/types/sanity/allPages/footer";

interface Props {
	footerData: Footer;
}

export default function FooterComp({ footerData }: Props): JSX.Element {
	return (
		<footer className="fixed bottom-0 w-full bg-slate-500 p-4 px-2 text-white">
			<p>{footerData.footerText}</p>
		</footer>
	);
}
