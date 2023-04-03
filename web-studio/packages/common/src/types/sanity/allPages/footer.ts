import { SanityDocument } from "@sanity/types";

import { Locale, SanityObject } from "@/types/sanity/common";

export interface FooterLink extends SanityObject {
	footerLinkTitle: string;
	footerLink: string;
}

export interface FooterLinkSanityData extends SanityObject {
	footerLinkTitle: Locale;
	footerLink: string;
}

interface FooterBase extends SanityDocument {
	_type: "siteFooter";
}

export interface FooterSanityData extends FooterBase {
	footerText: Locale;
	footerLinks: Array<FooterLinkSanityData>;
}

export interface Footer extends FooterBase {
	footerText: string;
	footerLinks: Array<FooterLink>;
}
