module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    jasmine: true
  },
  rules: {
    "no-unused-vars": "off",
    "no-use-before-define": ["error", { "functions": false, "classes": false, "variables": false }],
    "no-param-reassign": 0,
    "import/prefer-default-export": "off",
    "consistent-return": "off",
    "class-methods-use-this": 'off',
    "import/no-cycle": [0, { maxDepth: 1 }],
    "no-console": [
      "warn",
      { "allow": ["groupEnd", "group", "info", "error", "dir", "trace", "log"] }
     ]
    
  },
    
};
