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
  plugins: ['jest', 'jsx-a11y'],
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'prettier',
    'plugin:jsx-a11y/recommended'
  ],
  rules: {
    'no-console': 'off',
    'multiline-comment-style': ['error', 'starred-block']
  }
}
