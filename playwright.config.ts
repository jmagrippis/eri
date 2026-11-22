import { defineConfig, devices } from '@playwright/test'

const PORT = 8787
const baseURL = `http://localhost:${PORT}`

// the viewports the Cypress suite covered: Cypress' iphone-x, ipad-2 and macbook-13 presets
const viewports = {
  'iphone-x': { width: 375, height: 812 },
  'ipad-2': { width: 768, height: 1024 },
  'macbook-13': { width: 1280, height: 800 },
}

export default defineConfig({
  testDir: './e2e',
  forbidOnly: !!process.env.CI,
  retries: 2,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL,
    launchOptions: {
      // only for machines with a preinstalled Chromium Playwright can't find on its own
      executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH,
    },
  },
  projects: Object.entries(viewports).map(([name, viewport]) => ({
    name,
    use: { ...devices['Desktop Chrome'], viewport },
  })),
  webServer: {
    // the local Workers runtime (workerd), not `next dev`
    command: `npm run preview -- --port ${PORT}`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 300_000,
  },
})
