[![npm (scoped)](https://img.shields.io/npm/v/@twostoryrobot/eslint-config.svg)](https://www.npmjs.com/package/@twostoryrobot/eslint-config)

# Two Story Robot eslint

The Two Story Robot [sharable eslint configuration](https://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config)
so you can lint like us.

## Usage

Install the package

    npm install --save-dev @twostoryrobot/eslint-config

Make sure to install the peer dependencies

    npm install --save-dev eslint eslint-plugin-jest eslint-plugin-react eslint-config-prettier

If you are using NPM >5 you can also do this:

    npx install-peerdeps --dev @twostoryrobot/eslint-config

Add `@twostoryrobot/eslint-config` (or just `@twostoryrobot`) or
`@twostoryrobot/eslint-config/react` (no shortcut for the react config, sorry)
to the `extends` of your `.eslintrc`.

Example: `.eslintrc.js`:

```javascript
module.exports = {
  extends: ['@twostoryrobot/eslint-config/react']
}
```

Optionally, if you are using create-react-app, you can change the `eslintConfig`
in `package.json`:

```javascript
  "eslintConfig": {
    "extends": [
      "react-app",
      "@twostoryrobot/eslint-config/react"
    ]
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
