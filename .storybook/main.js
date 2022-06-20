const path = require('path'); // 👈 import path

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-postcss',
  ],
  framework: '@storybook/vue3',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            additionalData: `
            @import 'src/css/quasar.variables.scss';
            @import 'src/css/app.scss';
        `,
          },
        },
      ],
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.resolve(__dirname, '../src/'),
    };

    // Return the altered config
    return config;
  },
};
