module.exports = {
  processors: [
    [
      'stylelint-processor-styled-components',
      {
        ignoreFiles: ['**/*.css', '**/*.scss'],
      },
    ],
  ],
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-prettier',
    'stylelint-config-styled-components',
    'stylelint-config-recommended-scss',
  ],
  rules: {
    'no-empty-source': null,
    'property-no-unknown': null,
    'selector-pseudo-class-no-unknown': null,
  },
};
