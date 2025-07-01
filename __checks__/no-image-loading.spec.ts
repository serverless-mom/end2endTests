import { test, expect } from '@playwright/test'

test('intercept requests block', async ({ page }) => {
  // await page.route('**/*', (route) => {
  //   return route.request().resourceType() === 'image'

  //     ? route.abort()

  //     : route.continue()

  // })
  await page.goto('https://commons.wikimedia.org/wiki/Main_Page');
  await page.getByRole('searchbox', { name: 'Search Wikimedia Commons' }).click();
  await page.getByRole('combobox', { name: 'Search Wikimedia Commons' }).fill('egg');
  await page.getByRole('combobox', { name: 'Search Wikimedia Commons' }).press('Enter');
  await page.getByRole('searchbox', { name: 'Search Wikimedia Commons' }).first().click();
  await page.getByRole('combobox', { name: 'Search Wikimedia Commons' }).fill('owl');
  await page.getByRole('combobox', { name: 'Search Wikimedia Commons' }).press('Enter');
  await page.getByRole('searchbox', { name: 'Search Wikimedia Commons' }).first().click();
  await page.getByRole('combobox', { name: 'Search Wikimedia Commons' }).fill('Telephone booth');
  await page.getByRole('combobox', { name: 'Search Wikimedia Commons' }).press('Enter');
  await page.getByRole('link', { name: 'Telefonboks, andelslandsbyen' }).click();
  await page.locator('#file').getByRole('link', { name: 'File:Telefonboks,' }).click();
  await expect(page.getByRole('img')).toBeVisible();
})