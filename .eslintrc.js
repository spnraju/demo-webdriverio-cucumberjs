module.exports = {
  'env': {
    'es6': true,
    'node': true,
  },
  'extends': [
    'google',
    'prettier'
  ],
  'globals': {
    'When': 'readonly',
    'Given': 'readonly',
    'Then': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'rules': {
  },
};
