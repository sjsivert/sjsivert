import { SanityDocument, SanityObject } from "@/types/sanity/common";

export interface FooterLink extends SanityObject {
	footerLinkTitle: string;
	footerLink: string;
}

export interface Footer extends SanityDocument {
	_type: "siteFooter";
	footerText: string;
	footerLinks: Array<FooterLink>;
}
