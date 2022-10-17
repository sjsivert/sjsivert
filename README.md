# NoA Ignite Template monorepo

This monorepo is meant as a template for creating new projects when working with Sanity, Next.js and React components. The repo is meant as a "guide". You _can_ clone the repo and adjust it to your needs, but it's probably better to start your own monorepo and pick individual parts from this repo.

## Documentation

Documentation for the different apps and packages can be found inside that app or package.

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

-   `/apps/next-website`: A Next.js website
-   `/apps/sanity-studio`: Sanity studio
-   `/packages/common`: ...
-   `/packages/ui`: ...

### Common files found in all apps and packages

-   `.prettierrc.js` - Defines the code formatting
-

### Build everything

To build all apps and packages, run the following command:

```
yarn build
```

## Working with the apps and packages

It's recommended to open the apps and packages in separate editor windows. For example if you are going to work on the next site found in `/apps/next-website`, you should open this folder in a separate editor window. This will make debugging possible and it's probably easier to keep track of files.

## Useful Links

Learn more about Turborepo:

-   [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
-   [Caching](https://turborepo.org/docs/core-concepts/caching)
-   [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
-   [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
-   [Configuration Options](https://turborepo.org/docs/reference/configuration)
-   [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)

## Contributing

...
