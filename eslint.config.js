import js from '@eslint/js';
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config({
    extends: [
        js.configs.recommended,
        pluginJs.configs.recommended,
        ...tseslint.configs.recommended
    ],
    files: ['**/*.{js,ts,tsx}'],
    ignores: ['strapi', 'dist', 'coverage'],
    languageOptions: {
        globals: globals.node,
    },
    rules: {
        'no-console': 'warn',
        'no-unused-vars': 'warn',
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        eqeqeq: 'error',
        indent: ['error', 4],
        'no-trailing-spaces': 'error',
        'eol-last': ['error', 'always'],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
    },
});
