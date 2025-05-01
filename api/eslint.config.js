import js from '@eslint/js';
import globals from 'globals';
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
        globals: globals.node,
    },
    rules: {
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
