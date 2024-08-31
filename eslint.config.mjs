import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  {
    files: ['**/*.cjs', '**/config/*.js'],
    languageOptions: {
      sourceType: 'script',
      globals: {
        ...globals.node,
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
      },
    },
  },
  {
    files: ['**/*.mjs', '**/src/**/*.js'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
  },
];