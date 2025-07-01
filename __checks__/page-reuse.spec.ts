import { test, expect, type Page } from '@playwright/test';

test.describe.configure({ mode: 'serial' });

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test('runs first', async () => {
  await page.goto('https://danube-webshop.herokuapp.com/');
  await page.getByText('Celsius').click();
  await expect(page.locator('#app-content')).toContainText('Genre: scifi');
});

test('runs second', async () => {
  await expect(page.locator('#app-content')).toContainText('Left in stock: 1');
});

