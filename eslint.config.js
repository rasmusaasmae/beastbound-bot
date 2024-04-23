import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    files: ["**/*.js", "**/*.ts"],
    rules: {
      semi: "error",
      "prefer-const": "error",
    },
  },
  eslintConfigPrettier,
];
