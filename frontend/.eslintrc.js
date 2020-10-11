module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: "2020",
    sourceType: "module",
    ecmaFeafures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "google",
    "plugin:prettier/recommended",
  ],
  plugins: ["simple-import-sort"],
  rules: {
    "require-jsdoc": "off",
    "simple-import-sort/sort": "error",
    "sort-imports": "off",
    "import/order": "off",
  },
}
