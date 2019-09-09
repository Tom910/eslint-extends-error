module.exports = {
  overrides: [
    {
      parser: "@typescript-eslint/parser",
      rules: {
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }]
      },
      files: ['*.ts', '*.tsx'],
    }
  ]
};
