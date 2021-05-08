module.exports = {
  extends: ['./index.js', 'plugin:react/recommended', 'react-app'],
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
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off'
  }
}
