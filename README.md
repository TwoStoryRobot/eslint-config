[![npm (scoped)](https://img.shields.io/npm/v/@twostoryrobot/eslint-config.svg)](https://www.npmjs.com/package/@twostoryrobot/eslint-config)

# TSR eslint

The Two Story Robot [sharable eslint configuration](https://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config)
so you can lint like us.

## Usage

First, install the package:

```bash
npm install --save-dev @twostoryrobot/eslint-config
```

Then, add `@twostoryrobot` or `@twostoryrobot/eslint-config/react` to the 
`extends` of your `.eslintrc`.

For example, for server side apps, you can create an `.eslintrc.js` file:

```javascript
module.exports = {
  extends: ['@twostoryrobot']
}
```

Or, for web apps that use create-react-app, you can edit the existing 
`eslintConfig` key generated by CRA in `package.json`:

```
"eslintConfig": {
  "extends": [
    "react-app",
    "react-app/jest",
    "@twostoryrobot/eslint-config/react"
  ]
}
```
