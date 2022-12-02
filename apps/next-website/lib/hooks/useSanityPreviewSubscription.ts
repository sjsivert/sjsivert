import { sanityConfig } from "@/lib/config/envVariables";
import { createPreviewSubscriptionHook } from "next-sanity";

export const usePreviewSubscription = createPreviewSubscriptionHook(sanityConfig);
