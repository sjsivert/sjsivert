## 17.02.2023 - Sitemap updates and misc

* middleware now ignores `/sitemap.xml` and `/robots.txt`
* robots.txt and sitemap.xml is implemented using pages routes (will be switched to Routing Handlers when stable)
* removes the «next-sitemap» package
* node-fetch gets added to «serverComponentsExternalPackages» (next.config)
* Locks the next.js version to `13.1.7-canary.10`, since canary 11 and above is causing build problems

## 17.02.2023 - Localization

- Introduces a new project `next-website-app-dir-intl`
- Introduces a new project in the app folder, `sanity-studio-intl`.

This project is a Next.js 13 project using /app dir with full localization support and a full Sanity Studio setup with localization support.
Also updates types in common and adds a new content folder in common for fetching localized data from Sanity.

Please read : [docs/localization.md](docs/localization.md) to get a better understanding on how this works.

## 14.02.2023 - Sanity localization project

- Introduces a new project in the app folder, `sanity-studio-intl`.
- This is a full Sanity Studio setup with localization support.

## 10.02.2023 - UI and docs updates

- Basic UI for footer and main menu for the Next app dir project
- Updates docs

## 09.02.2023 - Bugfix Sanity preview filter

- (bugfix) Fixes an issue where the Sanity document filter function would return a draft when preview was false
- (common) Using `@sanity/types` instead of custom document type
- (next-website) No longer using the `usePreviewSubscription` (this has been removed) hook for Sanity preview. Now using a simpler model where preview data is loaded via `getStaticProps`.

## 08.02.2023 - Basic SEO for the Next app dir project

- Disables crawler indexing (since this is a demo site)
- Data loading for all pages not handles «not found» cases
- Basic setup for SEO data in the app dir next project
  - Pages setup
  - Updated docs
  - Also see https://beta.nextjs.org/docs/guides/seo

## 01.02.2023 - Misc updates

- Adds some basic Jest tests to the common package (and some utils)
- Adds groq and a method for getting all landing pages (for sitemaps)
- For the Next app dir project
  - Will now generate a robots.txt, a static sitemap and a dynamic sitemap

## 26.01.2023 - Cleanup

- Removes the legacy version of Sanity Studio
- The V3 version of Sanity Studio is now just Sanity Studio
  - Renamed `/apps/sanity-studio-v3` to `/apps/sanity-studio`
- Updates packages
- (new) The `/apps/next-website-app-dir/` project now has a basic Playwright setup for running end-to-end tests on the site.
  Documentation in the readme file for the project.

## 04.01.2023 - Next 13.1

- Updates both Next projects to Next 13.1.1
- Now using the build in «transpilePackages» config, removes «next-transpile-modules»
- Updates and fixes all eslint actions and prettier. All these actions now has global support via turbo root commands
  - Fixes eslint for the UI package

## ... see pull-requests for older updates and releases