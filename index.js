module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: ['jest'],
  extends: ['eslint:recommended', 'plugin:jest/recommended', 'prettier'],
  rules: {
    'no-console': 'off',
    'multiline-comment-style': ['error', 'starred-block'],
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'no-duplicate-imports': 'error',
    'prefer-const': 'error'
  }
}
