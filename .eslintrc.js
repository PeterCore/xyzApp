module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "typescript"],
  extends: ['taro/react'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    "no-unused-vars": [1, { "vars": "all", "args": "after-used" }],
    "quotes": [2, "single"],
    "import/no-mutable-exports": 0,
    "no-shadow": 0,
    "import/first": 0,
    "import/no-commonjs": 0
  },
};
