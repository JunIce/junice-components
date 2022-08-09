module.exports = {
  extends: ['prettier'],
  env: {
    jest: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['prettier'],
    },
  ],
};
