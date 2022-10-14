import { SanityDocument } from "../common";

export interface GlobalAlert extends SanityDocument {
	title: string;
	alertText: string;
	alertType: "info" | "warn" | "error";
}
