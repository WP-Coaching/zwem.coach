import { defineConfig, devices } from '@playwright/test'

const CI_RETRY_COUNT = 2

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? CI_RETRY_COUNT : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    env: {
      NEXT_PUBLIC_STRIPE_JAN_MRT_MONDAY_LINK:
        'https://buy.stripe.com/your-monday-link',
      NEXT_PUBLIC_STRIPE_JAN_MRT_WEDNESDAY_LINK:
        'https://buy.stripe.com/your-wednesday-link',
      NEXT_PUBLIC_STRIPE_APR_JUN_MONDAY_LINK: '',
      NEXT_PUBLIC_STRIPE_APR_JUN_WEDNESDAY_LINK: '',
    },
  },
})
