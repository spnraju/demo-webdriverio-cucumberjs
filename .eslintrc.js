module.exports = {
  root: true,
  plugins: ['wdio'],
  extends: ['eslint:recommended', 'eslint-config-prettier'],
  env: {
    node: true,
    es6: true,
  },
  globals: {
    When: true,
    Given: true,
    Then: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};
