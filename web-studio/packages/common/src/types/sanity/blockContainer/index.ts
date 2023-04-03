import type { TypedObject } from "@portabletext/types";

/**
 * This is a block container used by the article page in this example
 * Sanity Portable text
 */
export interface BlockContainer {
	_type: "blockContainer";
	body: Array<TypedObject> | TypedObject;
}
