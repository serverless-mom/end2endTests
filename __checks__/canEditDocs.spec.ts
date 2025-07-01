//canEditDocs.spec.ts
const { expect, test } = require('@playwright/test')

test('nav to docs, then click edit link in docs', async ({ page }) => {
  await page.goto('https://www.checklyhq.com/');
  await page.getByRole('button', { name: 'Resources' }).first().click();
  await page.getByRole('link', { name: 'Documentation'}).first().click();
  await expect(page.getByRole('article')).toContainText('on Github');
})