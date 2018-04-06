# 2SR eslint

## Usage

Install the package

```bash
npm install --save-dev @twostoryrobot/eslint-config
```

Make sure to install the peer dependencies

```bash
npm install --save-dev eslint eslint-plugin-jest eslint-plugin-react
```

Add `@twostoryrobot/eslint-config` (or just `@twostoryrobot`) or
`@twostoryrobot/eslint-config/react` (no shortcut for the react config, sorry)
to the `extends` of your `.eslintrc`.

Example: `.eslintrc.js`:

```javascript
module.exports = {
  extends: ['@twostoryrobot/eslint-config/react']
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
