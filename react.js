module.exports = {
  extends: ['./eslint-config-base.js', 'plugin:react/recommended'],
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
