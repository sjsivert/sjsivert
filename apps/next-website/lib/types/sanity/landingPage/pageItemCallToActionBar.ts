import { ComponentType } from "./index";

export interface PageItemCallToActionBar {
    _type: ComponentType.CALL_TO_ACTION_BAR;
    _key: string;

    bodyText: string;
    callToActionLabel: string;
    callToActionUrl: string;
    backgroundColor: "white" | "grey";
}
