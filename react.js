module.exports = {
  extends: ['base', 'plugin:react/recommended'],
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
