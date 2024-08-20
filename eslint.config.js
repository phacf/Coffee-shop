import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import tsEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default tseslint.config({
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ['**/*.{ts,tsx}'],
  ignores: ['dist'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
    parser: tsParser,
    sourceType: 'module',
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    import: importPlugin,
    prettier: prettier,
    '@typescript-eslint': tsEslint,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/order': [
      // Regra para organizar a ordem de importação
      'error',
      {
        groups: [
          'builtin', // Módulos nativos do Node.js, como 'fs' e 'path'
          'external', // Pacotes de terceiros instalados via npm
          'internal', // Alias e módulos internos do projeto
          ['parent', 'sibling', 'index'], // Relativos a arquivos do projeto
          'object', // Importações via objetos
          'type', // Importações de tipos (útil em TypeScript)
        ],
        'newlines-between': 'always', // Adiciona linha em branco entre grupos

        alphabetize: { order: 'asc', caseInsensitive: true }, // Ordena em ordem alfabética
      },
    ],
    'prettier/prettier': 'warn',
  },
})
