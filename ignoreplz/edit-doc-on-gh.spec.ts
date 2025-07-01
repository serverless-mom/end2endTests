import { test, expect } from '@playwright/test'

test('Checkly Homepages', async ({ page }) => {
    await test.step('navigate to homepage', async () =>{
        await page.goto('https://www.checklyhq.com/');
    })
    await page.getByRole('button', { name: 'Developers' }).first().click();
    await page.getByRole('link', { name: 'Documentation Technical docs' }).click();

    await expect(page.getByRole('link', { name: 'editing this page on Github' })).toBeVisible();

})
