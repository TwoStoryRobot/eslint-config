module.exports = {
  extends: ['plugin:react/recommended', './index.js'],
  env: {
    browser: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/display-name': 'off'
  }
}
