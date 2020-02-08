module.exports = {
  extends: ['./index.js', 'plugin:react/recommended'],
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
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
