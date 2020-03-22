const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');
// eslint-disable-next-line import/no-extraneous-dependencies
const nested = require('postcss-nested');
// eslint-disable-next-line import/no-extraneous-dependencies
const purgecss = require('@fullhuman/postcss-purgecss');

// postcss config example from:
// https://tailwindcss.com/docs/controlling-file-size/#setting-up-purgecss
module.exports = {
  plugins: [
    tailwind,
    autoprefixer,
    nested,
    process.env.NODE_ENV === 'production' &&
      purgecss({
        content: ['./client/index.html', './client/**/*.jsx'],
        defaultExtractor: content => content.match(/[\w-:/]+(?<!:)/g) || [],
      }),
  ],
};