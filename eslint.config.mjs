import { dirname } from 'path'
import { fileURLToPath } from 'url'
import base from '@pellegrims/eslint-config-base'
import nextConfig from 'eslint-config-next/core-web-vitals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const typescriptEslintPlugin = base.find(
  config => config.plugins?.['@typescript-eslint']
)?.plugins['@typescript-eslint']
const importEslintPlugin = base.find(config => config.plugins?.import)?.plugins
  .import

const nextConfigWithSharedPlugins = nextConfig.map(config => {
  if (!config.plugins) {
    return config
  }

  return {
    ...config,
    plugins: {
      ...config.plugins,
      ...(config.plugins['@typescript-eslint'] && {
        '@typescript-eslint': typescriptEslintPlugin,
      }),
      ...(config.plugins.import && { import: importEslintPlugin }),
    },
  }
})

const eslintConfig = [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'dist/**',
      'playwright-report/**',
      'open-next.config.ts',
    ],
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
  ...nextConfigWithSharedPlugins,
]

export default eslintConfig
