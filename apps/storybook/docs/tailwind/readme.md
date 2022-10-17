# Tailwind

We recommend using [Tailwind](https://tailwindcss.com/) to handle styling. Tailwind is a utility-first CSS framework packed with classes like **flex**, **pt-4**, **text-center** and **rotate-90** that can be composed to build any design, directly in your markup.

## Install Tailwind

**Step 1**

Install Tailwind CSS

```
npm install tailwindcss -D

or

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

## Add Tailwind to Storybook

**Step 1**

Install postcss and postcss-loader

```
npm install postcss postcss-loader
```

**Step 2**

We also need to install the PostCSS addon for Storybook

```
npm install @storybook/addon-postcss -D
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

## Installation complete

After installing and setting up TailwindCSS configs, Storybook should now work. You can test it by running `npm run storybook` and add some TailwindCSS classes to your components and stories files.
