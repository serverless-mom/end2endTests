import { test, expect } from '@playwright/test';

test('Book has correct details', async ({ page }) => {
  await page.route('*/**/api/books/23', async route => {
    const response = await route.fetch();
    const json = await response.json();
    json.stock="10980982349082340892340"
    await route.fulfill({ response, json });
  });
  await page.goto('https://danube-webshop.herokuapp.com/books/23');
  //Removed for brevity: checks of the book's title, genre, etc.
  await expect(page.getByRole('button', { name: 'Add to cart' })).toBeVisible();
  await expect(page.locator('#app-content')).toContainText("Left in stock: 0");
});