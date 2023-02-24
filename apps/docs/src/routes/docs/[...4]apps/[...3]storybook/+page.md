---
title: Storybook
---

This repository is intended as inspiration or a starter template to get rolling with Storybook and Tailwind.

## Project overview

-   The project uses Typescript
-   This project has a setup for using Tailwind

## Getting started and notes

-   Clone the repo
-   Run `yarn install`
-   Run Storybook `yarn storybook`

> There is a VSCode setting for handling `@tailwind` directives in the styles/index.css file.

Storybook needs to be installed into a project that is already set up with a framework. Storybook will look into your project's dependencies during its install process and detect that React is percent and provide you with the best configuration available.

### Install Storybook

Use the Storybook CLI to install it in a single command. Run this inside your existing project’s root directory:

```
npx storybook init
```

### Run Storybook

Depending on your framework, first, build your app and then check that everything worked by running:

```
yarn storybook
```

It will start Storybook locally and output the address. Depending on your system configuration, it will automatically open the address in a new browser tab, and you'll be greeted by a welcome screen.

### Storybook addons

Addons extend Storybook with features and integrations that are not built into the core. There are countless addons made by the community that unlock time-saving workflows.

Browse the [addon catalog](https://storybook.js.org/addons) to install an existing addon or as inspiration for your own addon.

Some recommended addons:

-   [Accessibility](https://storybook.js.org/addons/@storybook/addon-a11y/)
-   [Component status](https://storybook.js.org/addons/@etchteam/storybook-addon-status/)
-   [Display the compiled HTML](https://storybook.js.org/addons/@whitespace/storybook-addon-html/)

## Tailwind

We recommend using [Tailwind](https://tailwindcss.com/) to handle styling. Tailwind is a utility-first CSS framework packed with classes like **flex**, **pt-4**, **text-center** and **rotate-90** that can be composed to build any design, directly in your markup.

### Install Tailwind

**Step 1**

Install Tailwind CSS

```
yarn add tailwindcss -D
```

and create your `tailwind.config.js`

```
npx tailwindcss init
```

**Step 2**

Add the paths to all of your components files in your `tailwind.config.js` file. Since we're also using Storybook, you need to add the paths to the Stories files as well.

```js
content: ["./src/components/**/*.tsx", "./src/stories/**/*.tsx"],
```

**Step 3**

Create a `./src/styles/index.css` file, and add the `@tailwind` directives for each of Tailwind’s layers to your main CSS file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Since Tailwind uses custom directives you may get some errors in your `index.css` file. If so, see if the .vscode folder contains `css.css-data.json` and `settings.json`.

### Add Tailwind to Storybook

**Step 1**

Install postcss and postcss-loader

```
yarn add postcss postcss-loader
```

**Step 2**

We also need to install the PostCSS addon for Storybook

```
yarn add @storybook/addon-postcss -D
```

**Step 3**

Update your `.storybook/main.js` file to use the PostCSS addon

```js
module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		{
			name: "@storybook/addon-postcss",
			options: {
				postcssLoaderOptions: {
					implementation: require("postcss"),
				},
			},
		},
	],
	framework: "@storybook/react",
	core: {
		builder: "@storybook/builder-webpack5",
	},
};
```

**Step 4**

Add a `postcss.config.js` file with these settings

```js
/* eslint-env node */
module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
	},
};
```

**Step 5**

Import your new `./styles/index.css` in the `.storybook/preview.js` file like so

```js
import "../src/styles/index.css";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
```

### Installation complete

After installing and setting up TailwindCSS configs, Storybook should now work. You can test it by running `npm run storybook` and add some TailwindCSS classes to your components and stories files.
