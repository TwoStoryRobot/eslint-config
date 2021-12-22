[![npm (scoped)](https://img.shields.io/npm/v/@twostoryrobot/eslint-config.svg)](https://www.npmjs.com/package/@twostoryrobot/eslint-config)

# TSR eslint

The Two Story Robot [sharable eslint configuration](https://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config)
so you can lint like us.

## Usage

Install the package

```bash
npm install --save-dev @twostoryrobot/eslint-config
```

Add `@twostoryrobot` or `@twostoryrobot/eslint-config/react` to the `extends` of
your `.eslintrc`.

Example: `.eslintrc.js`:

```javascript
module.exports = {
  extends: ['@twostoryrobot']
}
```
