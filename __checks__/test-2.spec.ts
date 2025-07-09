import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://developers.checklyhq.com/reference/postv1checksurl');
  await page.getByRole('button', { name: ' Ruby' }).click();
  await page.getByRole('link', { name: 'Checks Show subpages for' }).click();
  await expect(page.getByRole('heading', { name: 'List all checks' })).toBeVisible();
  await expect(page.locator('#content-head')).toContainText('List all checks');
});