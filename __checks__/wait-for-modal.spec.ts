import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('file:///Users/nica/xibalba/checkly/examples/modalLoader.html');

  await page.getByRole('button', { name: 'Toolbar 3' }).click();
  await page.evaluate('modalsReady = true')
  await page.getByRole('button', { name: 'Toolbar 1' }).click();
  await page.locator('#modal1').getByText('Close').click();
});