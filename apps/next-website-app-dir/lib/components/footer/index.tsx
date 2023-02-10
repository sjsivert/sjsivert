import { Footer } from "common/src/types/sanity/allPages/footer";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

interface Props {
	footerData: Footer;
}

export default function FooterComp({ footerData }: Props): JSX.Element {
	return (
		<footer className="footer fixed bottom-0 w-full bg-base-200 p-10 text-base-content">
			<div>
				<span className="footer-title">Links</span>
				{footerData.footerLinks.map((link) => {
					if (link.footerLink.startsWith("http")) {
						return (
							<div key={link._key} className="flex gap-1">
								<a href={link.footerLink} target="_blank" rel="noreferrer">
									{link.footerLinkTitle}
								</a>
								<FiExternalLink />
							</div>
						);
					}
					return (
						<div key={link._key} className="flex gap-1">
							<Link key={link._key} href={link.footerLink} className="link-hover link">
								{link.footerLinkTitle}
							</Link>
						</div>
					);
				})}
			</div>
			<div className="grid grid-flow-col gap-4">
				<p>{footerData.footerText}</p>
			</div>
		</footer>
	);
}
