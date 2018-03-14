const path = require("path");

module.exports = {
  "root": true,
  "extends": ["airbnb", "react-app"],
  "plugins": ["flowtype"],
  "parser": "babel-eslint",
  "rules": {
    "function-paren-newline": ["error", "consistent"],
    "padded-blocks": ["error", { "classes": "always" }],
    "class-methods-use-this": ["off"],
    "no-confusing-arrow": ["error", { "allowParens": true }],
    "no-param-reassign": ["off"],
    "max-len": ["error", 120],
    "no-return-assign": [1],
    "no-debugger": [1],
    "no-confusing-arrow": 0,
    "camelcase": [1],
    "no-underscore-dangle": [1],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-unused-expressions": ["error", { "allowTernary": true }],
    "jsx-a11y/href-no-hash": ["off"],
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        "aspects": [
          "invalidHref"
        ]
      }
    ],
    "react/forbid-prop-types": ["off"],
    "react/no-string-refs": ["warn"],
    "react/no-find-dom-node": ["warn"],
    "react/default-props-match-prop-types": 0,
    "react/no-children-prop": 0,
    "flowtype/define-flow-type": 1,
    "flowtype/use-flow-type": 1,
    "import/prefer-default-export": [0],
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default-member": 0,
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": [path.resolve(__dirname, "src")],
      }
    }
  }
}
