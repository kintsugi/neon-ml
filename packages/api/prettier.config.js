// Some settings automatically inherited from .editorconfig
module.exports = {
  semi: true,
  // Trailing commas help with git merging and conflict resolution
  trailingComma: 'es5',
  singleQuote: true,
  overrides: [
    {
      files: '.editorconfig',
      options: { parser: 'yaml' },
    },
    {
      files: 'LICENSE',
      options: { parser: 'markdown' },
    },
  ],
};
