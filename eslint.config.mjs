import { dirname } from 'path'
import { fileURLToPath } from 'url'
import base from '@pellegrims/eslint-config-base'
import nextConfig from 'eslint-config-next/core-web-vitals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const typescriptEslintPlugin = base.find(
  config => config.plugins?.['@typescript-eslint']
)?.plugins['@typescript-eslint']

const nextConfigWithSharedTypeScriptPlugin = nextConfig.map(config => {
  if (!config.plugins?.['@typescript-eslint']) {
    return config
  }

  return {
    ...config,
    plugins: {
      ...config.plugins,
      '@typescript-eslint': typescriptEslintPlugin,
    },
  }
})

const eslintConfig = [
  {
    ignores: ['.next/**', 'node_modules/**', 'dist/**', 'playwright-report/**'],
  },
  ...base,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
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
  ...nextConfigWithSharedTypeScriptPlugin,
]

export default eslintConfig
