---
title: Localization
---

<script>
	import diagramImg from "../assets/loc_diagram_img.png";
</script>

## Localization

This document will explain the philosophy and architecture behind the localization setup for the following projects:

-   `/apps/next-website-app-dir-intl`
-   `/apps/sanity-studio-intl`
-   `/apps/web-sveltekit-intl`

:::admonition type="tip"
It might be useful to read the [foundational philosophy for the repo](background.md) first, in order to get a better understanding of the background and ideas on which all the projects in this repo has been built.
:::

## Localization - Architecture and overall approach

:::admonition type="warning"
This approach for localization will not work for statically generated sites since it depends on middleware for Next and server hooks for SvelteKit. If you need to create a static site, it's usually better to use something like Astro or similar.
:::

Localization can be somewhat complicated when working in a team with multiple people. The localization setup for the projects above is an attempt at making an understandable, robust and scalable architecture for supporting multiple languages in Sanity and for the website projects.

To achieve this we need some goals to aim for:

1. Localization should be scoped to the data fetching modules as much as possible. The closer you get to UI components, the less a developer should need to think about localization.
2. It should be easy to add support for a new language. Preferably this can be done without writing any new logic or updating types.
3. It should not be necessary for a developer to worry about locales when implementing simple links, the system should handle this automatically.

### (1) Scoping localization

Consider the stack below. This shows a typical flow where Sanity data is fetched by a page or a layout using data functions located in the «common package». Here, all localization is handled within the data fetching functions.

This means that pages and components only concern themselves with the data they are supposed to display, no need to know about the current locale at all.

<figure>
	<img src={diagramImg} alt="Diagram" />
	<figcaption>Localization architecture</figcaption>
</figure>

To make this a bit more clear, consider how this approach impacts the types/interfaces of the data.

An example: Let's say that we have the following Sanity document (output from query):

```typescript
{
	title: {
		"en":"The title in english",
		"no":"En norsk tittel",
		// maybe more languages
	},
	// ... more stuff
}
```

This would have the following type:

```typescript
interface DemoDoc {
	// The type of title is an index signature since
	// we don't hardcode the languages (more on why below)
	title: { [key: string]: string };
}
```

If you where to use this data directly in a page or a component you would need to know the current locale. In addition you would need to handle any fallbacks for situations where the current locale has no value.

```typescript
// in a page
const demoDoc = getDataFromSanity();
const lang = params.lang; // Get the locale from params
const defaultLang = "": // Get the default locale
const usableTitle = demoDoc.title[lang] || demoDoc.title[defaultLang];
```

This is a lot of repetition for each page and component, and you would also need to pass the locale as props into all the page components and further.

**The solution**

By scoping all the Sanity localization to the data fetching methods we would move this work into one location and only need to handle it once. Using the same document as above, but this time localization is handled by the data fetching method:

The interface would now look like this, since the language has already been determined when fetching the data.

```typescript
interface DemoDoc {
	title: string;
}
```

Fetching data in a page and using it would be much simpler since we only need to pass the `lang` param into the data fetching function.

```typescript
// In a page
const lang = params.lang; // Get the locale from params
const demoDoc = getDataFromSanity(lang);
const usableTitle = demoDoc.title;
```

To see this implemented, take a look at the following files:

-   Handling locales: `packages/common/src/content/sanity-intl/homePage/index.ts`
-   Using the function in a page: `/apps/next-website-app-dir-intl/app/[lang]/page.tsx`

**Downsides to this approach**

If you need to use the Sanity live preview setup, you'll be dependent on parsing locales multiple times. This is because the live preview setup requires Sanity data to be streamed on the client side. It will still work, but it'll require some extra work.

### (2) Adding a new language

In `/packages/common/src/locales/languages.ts` there's an array called `supportedLanguages`. Adding a new locale to this array and then rebuilding Sanity Studio will add a new locale. That's it.

This works because language keys are not hardcoded in any type or lookup routine. They are always treated like indexes. An example:

As we saw in the scoping section above, all locales are typed as index signatures. In the type below, this means that the title can have any key with a string.

```typescript
interface DemoDoc {
	title: { [key: string]: string };
}
```

Possible objects using this approach:

```typescript
{
	title: {
		"en":"An english title",
		"no-nb":"En tittel på bokmål",
		// and so on....
	}
}
```

The alternative is to hardcode the languages in the type, like so:

```typescript
interface DemoDoc {
	title: {
		en: string;
		no: string;
		// ... so on
	};
}
```

Doing this would require an update of the type whenever a language is added/removed.

> ⚠️ The preview keys in the Sanity documents are still hardcoded to english in the `apps/sanity-studio-intl` repo. This will only break stuff if you remove the default language (English). This will be fixed.

### (3) A simpler approach to making links work with localization

In Next.js (when using the page dir) you can use «NextLink» and pass a locale to it like so

```typescript
// In Next 13 pages
<Link href="/another" locale="fr">Test</Link>
// Or...
<Link href="/fr/another">Test</Link>
```

The Link component does not have a locale property in Next when using the «/app dir» and it does not work in SvelteKit (obviously).

You can of course add the locale to the path manually, but in order to do this you need to have access to the locale wherever you are defining a link. This means passing the locale string into components and functions where needed.

The approach used in the template repo do NOT require links to include the locale. In the setup provided in `/apps/next-website-app-dir-intl/app` you can simply ignore the locale when writing links, it will just work.

```typescript
// This...
<Link href="/fr/another">Test</Link>

// Becomes this..
<Link href="/another">Test</Link>
```

**How the heck does localization work without passing the locale**

:::admonition type="info"
🤓 This section is a bit technical and requires some understanding about how middleware works in Next or hooks work in SveltKit.
:::

Take a look at `/apps/next-website-app-dir-intl/middleware.ts`.
This is based in the middleware example from Vercel found [here](https://beta.nextjs.org/docs/guides/internationalization#routing-overview), but it has been significantly altered and upgraded.

The approach here is the following.

-   Figure out the current locale from the pathname (if any)
-   If there is a locale in the path
    -   Set a locale cookie and render the page
-   If there isn't a locale in the path
    -   Check if the locale cookie has been set and get the locale if it exists
    -   If the locale was found in the cookie, use it to create the url
    -   If not, use the default locale to create the url
    -   Update the locale cookie.
    -   Redirect to the url

Since the middleware/hook runs before all routes, a click on the link `/articles` will be automatically resolved to `/{locale}/articles` and then rendered. This means that the locale doesn't have to be a part of the link, but it can be if you for instance want to change the locale.

**Current limitations**

(The is a Next spesific limitation)
Take a look at `/apps/next-website-app-dir-intl/lib/components/mainMenu/index.tsx`. The language picker does not preserve the path, it will always send you back to the home page. This can be fixed by using a client component to get the path. But, it has been intentionally been left out for now to avoid client components.

In the SvelteKit project, the current route is preserved when swapping the locale.
