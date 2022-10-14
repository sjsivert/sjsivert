import { SanityImageObject } from "@sanity/image-url/lib/types/types";

export interface AccessibleImage extends SanityImageObject {
	_type?: string;
	alt?: string;
	caption?: string;
}
