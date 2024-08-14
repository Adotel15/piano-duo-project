import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config({
    extends: [
        js.configs.recommended, 
        ...tseslint.configs.recommended
    ],
    files: ['**/*.{ts,tsx}'],
    ignores: ['dist'],
    languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
    },
    plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
    },
    rules: {
        ...reactHooks.configs.recommended.rules,
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'no-console': 'warn',
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        eqeqeq: 'error',
        indent: ['error', 4],
        'no-trailing-spaces': 'error',
        'eol-last': ['error', 'always'],
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        'padded-blocks': ['error', 'never'],
        'arrow-parens': ['error', 'as-needed'],
        'no-extra-parens': ['error', 'all', { nestedBinaryExpressions: false }],
    },
});
