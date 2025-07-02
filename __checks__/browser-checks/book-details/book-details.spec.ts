import { test, expect } from '@playwright/test';

test('Book has correct details', async ({ page }) => {
  await page.route('*/**/api/books/23', async route => {
    const json = {
      "id": 22,
      "title": "Does the Sun Also Rise?",
      "author": "Ernesto Doubtingway",
      "genre": "novel",
      "price": "9.95",
      "rating": "★★★★☆",
      "stock": "22,239,782"
    }
    await route.fulfill({ json });
  });

  await page.goto('https://danube-webshop.herokuapp.com/books/23');
  //Removed for brevity: checks of the book's title, genre, etc.
  await expect(page).toHaveScreenshot()
  await expect(page.locator('#app-content')).toContainText("Left in stock:");
});