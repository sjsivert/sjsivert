import { createPreviewSubscriptionHook } from "next-sanity";

import { sanityConfig } from "common/src/clients/config";

export const usePreviewSubscription = createPreviewSubscriptionHook(sanityConfig);
