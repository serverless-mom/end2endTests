import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.checklyhq.com/');
  await page.getByRole('button', { name: 'Docs Site' }).click();
  await page.getByRole('link', { name: 'Documentation Technical docs' }).click();
  await expect(page.getByRole('link', { name: 'editing this page on Github' })).toBeVisible();
});