module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: ['jest'],
  extends: ['eslint:recommended', 'plugin:jest/recommended', 'prettier'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', {
      avoidEscape: true,
    }],
    semi: ['error', 'never'],
    'no-console': 'off'
  }
}
