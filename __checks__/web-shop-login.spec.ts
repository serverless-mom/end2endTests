import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://danube-webshop.herokuapp.com/');
  await page.getByText('Business').click();
  await page.locator('a').filter({ hasText: 'Crime & Thrillers' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('parry');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('nica@checklyhq.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
});