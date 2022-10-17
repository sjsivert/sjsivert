# Storybook

Storybook needs to be installed into a project that is already set up with a framework. Storybook will look into your project's dependencies during its install process and detect that React is precent and provide you with the best configuration available.

## Install Storybook

Use the Storybook CLI to install it in a single command. Run this inside your existing project’s root directory:

```
npx storybook init
```

## Run Storybook

Depending on your framework, first, build your app and then check that everything worked by running:

```
npm run storybook
```

or

```
yarn storybook
```

It will start Storybook locally and output the address. Depending on your system configuration, it will automatically open the address in a new browser tab, and you'll be greeted by a welcome screen.

## Storybook addons

Addons extend Storybook with features and integrations that are not built into the core. There are countless addons made by the community that unlock time-saving workflows.

Browse the [addon catalog](https://storybook.js.org/addons) to install an existing addon or as inspiration for your own addon.

Some recommended addons:

-   [Accessibility](https://storybook.js.org/addons/@storybook/addon-a11y/)
-   [Component status](https://storybook.js.org/addons/@etchteam/storybook-addon-status/)
-   [Display the compiled HTML](https://storybook.js.org/addons/@whitespace/storybook-addon-html/)
