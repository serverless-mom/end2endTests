import { test, expect } from '@playwright/test'

test('Checkly Homepages', async ({ page }) => {
  const response = await page.goto('https://danube-web.shop')
  expect(response?.status()).toBeLessThan(400)
  await expect(page).toHaveTitle(/Danube WebShop/)
  await page.screenshot({ path: 'homepage.jpg' })
})
