import { dirname } from 'path'
import { fileURLToPath } from 'url'
import base from '@pellegrims/eslint-config-base'
import nextConfig from 'eslint-config-next/core-web-vitals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const eslintConfig = [
  {
    ignores: ['.next/**', 'node_modules/**', 'dist/**', 'playwright-report/**'],
  },
  ...base,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
  },
  {
    files: ['playwright.config.ts'],
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'property', format: ['camelCase', 'UPPER_CASE'] },
      ],
    },
  },
  ...nextConfig,
]

export default eslintConfig
