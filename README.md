# NoA Ignite Template monorepo

This monorepo is meant as a template for creating new projects when working with Sanity, Next.js and React components. The repo is meant as a "guide" for how to structure your apps and packages. You _can_ clone the repo and adjust it to your needs, but it's probably better to start your own monorepo and pick individual parts from this repo.

> PS: All the apps, packages and documentation assumes that you have at least some knowledge of how to work with both Sanity, React and Next projects. This is not a "getting started" ...thing 🤓

## Documentation

Documentation for the different apps and packages can be found inside that app or package.

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

-   `/apps/next-website`: A Next.js website
-   `/apps/sanity-studio`: Sanity studio
-   `/apps/storybook`: A Storybook setup for testing ui components
-   `/packages/common`: Utils that are used in multiple apps
-   `/packages/ui`: React UI components

### Common files found in all apps and packages

-   `.prettierrc.js` - Defines the code formatting

### Build everything

To build all apps and packages, run the following command from the root of the project:

```
yarn build
```

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
