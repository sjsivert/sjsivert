---
title: Common
---

## Common

This is a common library for utils used by multiple apps

There are no exports and no build step.
To import a module point to the src folder:

```typescript
import { getBaseUrl } from "common/src/utils/url";
```

## Content

-   `clients` - All clients used to fetch data
-   `content` - Functions and queries for all content (in this repo it's only Sanity content, but other content should go in here as well)
-   `locales` - Functions and data from working with locales (language support)
-   `sanity` - Sanity config
-   `types` - All Typescript types for non local objects and functions
-   `utils` - Shared utils
