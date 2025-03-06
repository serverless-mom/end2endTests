import { test, expect } from '@playwright/test';

test.use({
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/79.0.3945.0 Safari 537.36 Secret/<MY_SECRET>'
})

test('test', async ({ page }) => {
  await page.goto('https://mortgage.gocompare.com/?utm_source=monitoring')
  await expect(page).toHaveTitle("Compare Mortgages - Go.Compare");
});