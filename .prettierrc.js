module.exports = {
  $schema: "http://json.schemastore.org/prettierrc",
  semi: false,
  singleQuote: true,
  trailingComma: "all",
  overrides: [
    {
      files: "*.yml",
      options: {
        singleQuote: false,
      },
    },
  ],
};
