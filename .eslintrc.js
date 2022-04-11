module.exports = {
  root: true,
ex
  env: {
    browser: true,
    es2021: true,
  },
  extends: "@react-native-community",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
