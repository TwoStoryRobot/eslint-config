[![npm (scoped)](https://img.shields.io/npm/v/@twostoryrobot/eslint-config.svg)](https://www.npmjs.com/package/@twostoryrobot/eslint-config)

# 2SR eslint

The Two Story Robot [sharable eslint configuration](https://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config)
so you can lint like us.

## Usage

Install the package

```bash
npm install --save-dev @twostoryrobot/eslint-config
```

Make sure to install the peer dependencies

```bash
npm install --save-dev eslint eslint-config-prettier eslint-plugin-jest eslint-plugin-react
```

If you are using NPM >5 you can also do this:

    npx install-peerdeps --dev @twostoryrobot/eslint-config

Add `@twostoryrobot/eslint-config` (or just `@twostoryrobot`) or
`@twostoryrobot/eslint-config/react` (no shortcut for the react config, sorry)
to the `extends` of your `.eslintrc`. If using create-react-app, you must make
sure to configure eslint via `package.json` instead, to ensure it is used by the
dev server. You can also remove the default `extends: ['react-app','react-app/jest'`],
since this config also includes those rules.

Example: `.eslintrc.js`:

```javascript
module.exports = {
  extends: ['@twostoryrobot/eslint-config/react']
}
```

Example: `package.json` if using CRA:

```json
{
  ...
  "eslintConfig": {
    "extends": [
      "@twostoryrobot/eslint-config/react"
    ]
  },
  ...
}
```

### Scripts

Now you can add a script to your project's package.json that calls eslint and
it will reference the config file in the root of your project directory.

```json
"scripts": {
  "eslint": "eslint '**/*.js'"
}
```

### Hooks

If you install [husky](https://github.com/typicode/husky) you can invoke eslint
as a hook for various actions (precommit, prepush, etc)

```json
"scripts": {
  "precommit": "eslint '**/*.js'"
}
```
