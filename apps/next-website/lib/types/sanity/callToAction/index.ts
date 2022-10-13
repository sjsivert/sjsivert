/**
 * Types for the Call to action block component
 */
import type { TypedObject } from "@portabletext/types";

export interface CallToActionBlockComp {
    _type: "callToAction";
    _key: string;
    title: string;
    callToActionButton: {
        label: string;
        url: string;
    };
    bodyBlock: Array<TypedObject> | TypedObject;
}
