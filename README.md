# 2SR eslint

## Usage

Installing the package will make a symlink in the root of your project to the
eslint config in this repo. It is recommended to add `.eslintrc.js` to your
`.gitignore` so you don't accidentally commit the symlink.

```bash
npm install --save-dev @twostoryrobot/eslint
```

Make sure to install the peer dependencies

```bash
npm install --save-dev eslint eslint-plugin-jest
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
