module.exports = {
  "extends": [
    "eslint:recommended", // identifies common problems; see https://eslint.org/docs/rules/
    "plugin:prettier/recommended" // harmonizes Prettier and ESLint recommended rules; see https://prettier.io/docs/en/eslint.html#use-both
  ],
  "plugins": [
    "prettier" // ensures .prettierrc is honored
  ],
  "env": {
    "browser": true, // lets ESLint know `window` and `document` are defined
    "node": true, // allows `module` to be used for gruntfile.js
    "amd": true // allows `require()` and `define()` for use as an AMD (asynchronous module definition) 
  }
}