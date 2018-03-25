module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["jest", "react"],
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:react/recommended"
  ],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "never"],
    "no-console": "off"
  }
}
