module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          // TODO: figure out a better target that closely matches Rhino
          ie: '10',
        },
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    "@babel/preset-react",
    '@babel/preset-typescript',
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties"
  ],
};
