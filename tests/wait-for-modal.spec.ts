import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('file:///Users/nica/xibalba/checkly/examples/modalLoader.html');
  //await page.getByRole('button', { name: 'Toolbar 2' }).click();
  //await page.waitForTimeout(10000);
  await page.getByRole('button', { name: 'Toolbar 3' }).click();
  await page.evaluate('modalsReady = true')
  //await page.locator('#modal3').getByText('Close').click();
  await page.getByRole('button', { name: 'Toolbar 1' }).click();
  await page.locator('#modal1').getByText('Close').click();
});