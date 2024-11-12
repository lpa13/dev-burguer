import globals from "globals";
import pluginJs from "@eslint/js";
import pluginPrettier from "eslint-plugin-prettier"; // Importa o plugin do Prettier
import configPrettier from "eslint-config-prettier"; // Importa a configuração do Prettier

export default [
  // Configuração global
  {
    languageOptions: {
      globals: globals.node,
    },
  },

  // Configurações recomendadas do ESLint para JavaScript
  pluginJs.configs.recommended,

  // Integração com o Prettier
  {
    plugins: {
      prettier: pluginPrettier, // Adiciona o plugin Prettier
    },
    rules: {
      "prettier/prettier": "error", // Regras do Prettier como erros
    },
    extends: [
      "eslint:recommended",
      "plugin:prettier/recommended", // Adiciona Prettier como configuração estendida
      configPrettier, // Desativa regras conflitantes com o Prettier
    ],
  },
];
