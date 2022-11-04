module.exports = {
  stories: [
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  options: {
    storySort: {
      method: "alphabetical",
      locales: "en-US",
    },
  },
  viteFinal: (config, { configType }) => {
    if (configType === "PRODUCTION") {
      return (config.base = "/yhva/");
    }

    return config;
  },
};
