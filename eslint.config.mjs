import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import react from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tailwindcss from 'eslint-plugin-tailwindcss';
import pluginPromise from 'eslint-plugin-promise';
import eslintConfigPrettier from 'eslint-config-prettier';
import nextPlugin from '@next/eslint-plugin-next';
import love from 'eslint-config-love';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default tseslint.config(
  {
    ignores: ['*.config.ts', '*.config.js', 'next-env.d.ts', '**/.next', 'eslint.config.mjs', '**/.storybook'],
  },
  js.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  ...compat.extends('plugin:react-hooks/recommended'),
  ...tailwindcss.configs['flat/recommended'],
  {
    name: 'simple-import-sort',
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^next', '^@?\\w'],
            ['^@?\\w'],
            ['^\\u0000'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\.\\./(?=.*/)(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.\\./?$'],
            ['^.+\\.s?css$'],
            ['^.+\\.svg$'],
            ['^.+\\.module\\.s?css$'],
            ['^.+\\.module\\.svg$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
  pluginPromise.configs['flat/recommended'],
  {
    name: 'Next.js',
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: { ...nextPlugin.configs.recommended.rules, ...nextPlugin.configs['core-web-vitals'].rules },
  },
  {
    name: '@stylistic/eslint-plugin',
    plugins: {
      react,
      '@stylistic': stylistic,
    },
    rules: {
      'react/jsx-boolean-value': 'error',
      'react/jsx-curly-brace-presence': 'error',
      'react/jsx-pascal-case': 'error',
      'no-console': 'warn',
      '@stylistic/semi': ['warn', 'always'],
      'promise/always-return': 'off',
    },
  },
  {
    ...love,
    name: 'eslint-config-love',
    rules: {
      ...love.rules,
      complexity: ['warn', 20],
      '@typescript-eslint/no-magic-numbers': 'off',
      'max-lines': ['warn', 1000],
    },
  },
  {
    name: 'eslint-config-prettier',
    ...eslintConfigPrettier,
  },
  {
    name: 'TypeScript config',
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.test.*'],
    rules: {
      'max-lines': 'off',
      'max-nested-callbacks': 'off',
    },
  }
);