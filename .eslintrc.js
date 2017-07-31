// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  "rules": {
    "no-unused-vars": "warn",
    "no-new": "off",
    "no-multiple-empty-lines": [
      "warn",
      {
        "max": 2
      }
    ],
    "no-tabs": "error",
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": {
          "var": 1,
          "let": 1,
          "const": 1
        }
      }
    ],
    "eol-last": [
      "error",
      "always"
    ],
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "keyword-spacing": [
      "error"
    ],
    "no-trailing-spaces": [
      "error",
      {
        "skipBlankLines": true
      }
    ],
    "no-debugger": "off",
    "no-undef": [
      "error",
      {
        "typeof": false
      }
    ],
    "semi": [
      "error",
      "always"
    ],
    "wrap-iife": [
      "error",
      "inside"
    ],
    "no-magic-numbers": [
      "error",
      {
        "ignoreArrayIndexes": true,
        "ignore": [-1, 0, 1, 2]
      }
    ]
  }
}
