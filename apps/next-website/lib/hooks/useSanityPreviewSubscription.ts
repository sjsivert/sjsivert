import { createPreviewSubscriptionHook } from "next-sanity";

import { sanityConfig } from "@/lib/clients/config";

export const usePreviewSubscription = createPreviewSubscriptionHook(sanityConfig);
