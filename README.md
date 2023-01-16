[![npm (scoped)](https://img.shields.io/npm/v/@twostoryrobot/eslint-config.svg)](https://www.npmjs.com/package/@twostoryrobot/eslint-config)

# TSR eslint

The Two Story Robot [sharable eslint configuration](https://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config)
so you can lint like us.

## Usage

First, install the package:

```bash
npm install --save-dev @twostoryrobot/eslint-config
```

### Node.js

Create an `.eslintrc.js` file:

```javascript
module.exports = {
  extends: '@twostoryrobot'
}
```

Then add the eslint command to your `package.json`:

```
{
  "scripts": {
    "eslint": "eslint '**/*.js'"
  }
}
```

You can then run eslint manually with `npm run eslint`. We also recommend 
running eslint as [part of your tests using jest-runner-eslint](https://github.com/TwoStoryRobot/javascript#automatic-styling). 

### Create React App

Add our config to the existing `eslintConfig` key generated in `package.json`:

```
{
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest",
      "@twostoryrobot/eslint-config/react"
    ]
  }
}
```

Then add the eslint command to your `package.json`:

```
{
  "scripts": {
    "eslint": "eslint '**/*.js'"
  }
}
```

CRA will automatically run lint checks as part of the build. You can also run 
them manually with `npm run eslint`.

Developers may want to set `ESLINT_NO_DEV_ERRORS=true` to avoid eslint errors 
halting the build in development (they will still error in production builds).

### Next.js

Create an `.eslintrc.js` file:

```javascript
module.exports = {
  extends: '@twostoryrobot/eslint-config/next'
}
```

Then add the eslint command to your `package.json`:

```
{
  "scripts": {
    "eslint": "eslint '**/*.js'",
  }
}
```

Next.js will automatically run lint checks as part of the production build. You
can also run them manually with `npm run eslint`.

