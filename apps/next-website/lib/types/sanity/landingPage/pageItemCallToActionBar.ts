import SchemaType from "common/sanity/SchemaType";

export interface PageItemCallToActionBar {
    _type: SchemaType.LANDING_PAGE_ITEM_CALL_TO_ACTION_BAR;
    _key: string;

    bodyText: string;
    callToActionLabel: string;
    callToActionUrl: string;
    backgroundColor: "white" | "grey";
}
