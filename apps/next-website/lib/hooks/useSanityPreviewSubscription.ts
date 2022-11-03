import { createPreviewSubscriptionHook } from "next-sanity";

import { sanityConfig } from "@/lib/config/envVariables";

export const usePreviewSubscription = createPreviewSubscriptionHook(sanityConfig);
