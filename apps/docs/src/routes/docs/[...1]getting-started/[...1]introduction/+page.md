## Introduction

This monorepo (using Turborepo) is meant as a template for creating new projects when working with Sanity, Next.js (or SvelteKit) and React/Svelte components. The repo is meant as a "guide" for how to structure your apps and packages. You _can_ clone the repo and adjust it to your needs, but it's probably better to start your own monorepo and pick individual parts from this repo.

> PS: All the apps, packages and documentation assumes that you have at least some knowledge of how to work with both Sanity, React, SvelteKit or Next projects. This is not a "getting started" ...thing 🤓

## Releases

For all releases, please see the [release log](https://github.com/makingwaves/sanity-next-component-template-repo/blob/main/releases.md)

## Gaining access to the repo

**The repository is only accessible for NoA Ignite employees.**

The repo can be found here: https://github.com/makingwaves/sanity-next-component-template-repo

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

-   `/apps/next-website`: A Next.js website
-   `/apps/next-website-app-dir`: A Next.js site using the /app dir (beta)
-   `/apps/next-website-app-dir-intl`: A Next.js site using the /app dir (beta) with localization support
-   `/apps/sanity-studio`: Sanity Studio
-   `/apps/sanity-studio-intl`: Sanity Studio with localization support
-   `/apps/storybook`: A Storybook setup for testing ui components
-   `/apps/web-sveltekit`: A SvelteKit website
-   `/apps/web-sveltekit-intl`: A SvelteKit website with localization support
-   `/packages/common`: Utils that are used in multiple apps
-   `/packages/ui`: React UI components

### Common files found in all apps and packages

-   `.prettierrc.js` - Defines the code formatting (it does not use inheritance yet)

### Build everything

To build all apps and packages, run the `yarn build` from the root of the project. Since this repo doesn't actually build the packages for distribution you'll never need to use this command. Use the build command for the app instead, it's faster.

## Working with the apps and packages

**It's recommended to open the apps and packages in separate editor windows**. For example if you are going to work on the next site found in `/apps/next-website`, you should open this folder in a separate editor window. This will make debugging possible and it's probably easier to keep track of files.

## Useful Links

Learn more about Turborepo:

-   [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
-   [Caching](https://turborepo.org/docs/core-concepts/caching)
-   [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
-   [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
-   [Configuration Options](https://turborepo.org/docs/reference/configuration)
-   [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)

## Contributing and reporting bugs

If you find a bug; Fork the repo, fix the bug, and create a pull request. Please describe what has been fixed and why. You can assign the pull-request to any of the admins.

If you have a suggestion for a new feature or you feel that something should be changed, open an issue so the item can be discussed.

Always be polite and describe pull-requests and issues so other people can understand them.
