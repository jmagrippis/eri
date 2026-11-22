import { expect, test } from '@playwright/test'

test.describe('contact page', () => {
  test.beforeEach(async ({ page }) => {
    // MSW answers /api/contact in the browser: wait until it is mocking
    const mocking = page.waitForEvent('console', (message) =>
      message.text().includes('Mocking enabled')
    )
    await page.goto('/contact')
    await mocking
  })

  test('allows me to submit a message', async ({ page }) => {
    await page.getByLabel(/name/i).fill('Elena Example')
    await page.getByLabel(/email/i).fill('elena@example.com')
    await page.getByLabel(/message/i).fill('We should work together!')

    await page.getByRole('button', { name: /submit/i }).click()

    await expect(
      page.getByRole('alert', { name: /Eri got your message, thanks!/i })
    ).toBeVisible()
  })

  test('informs me something went wrong', async ({ page }) => {
    // an email including "error" will result in a 500 response
    await page.getByLabel(/email/i).fill('error@example.com')
    await page.getByLabel(/name/i).fill('Elena Example')
    await page.getByLabel(/message/i).fill('We should work together!')

    await page.getByRole('button', { name: /submit/i }).click()

    await expect(
      page.getByRole('alert', {
        name: /Something went wrong\.\.\. Try again?/i,
      })
    ).toBeVisible()
  })
})
