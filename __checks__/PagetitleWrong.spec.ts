const { test, expect } = require("@playwright/test");

test.describe("Check Page Title", () => {
    let page;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
    });

    test("has title 'Compare Mortgages - Go.Compare'", async () => {
        const MAX_RETRIES = 3; // Retry up to 3 times
        let retries = 0;
        let success = false;

        while (retries < MAX_RETRIES && !success) {
            try {
                console.log(`Attempt ${retries + 1}: Navigating to the page`);
                await page.goto("https://mortgage.gocompare.com/?utm_source=monitoring", {
                    waitUntil: "networkidle",
                    timeout: 60000, // Increase timeout to 60 seconds
                });

                // Check for the intermediary page
                if (await page.locator('h1:has-text("Pardon Our Interruption")').isVisible()) {
                    console.error("Blocked by intermediary page. Retrying...");
                    retries++;
                    continue;
                }

                // Take a screenshot
                await page.screenshot({ path: `screenshot_attempt_${retries + 1}.png`, fullPage: true });

                // Retrieve and validate the title
                const title = await page.title();
                console.log(`Page Title Retrieved: ${title}`);
                expect(title).toBe("Compare Mortgages - Go.Compare");
                success = true; // Test passed
            } catch (error) {
                console.error(`Error on attempt ${retries + 1}: ${error.message}`);
                retries++;
            }
        }

        if (!success) {
            throw new Error("Failed to load the page or retrieve the correct title after multiple retries.");
        }
    });

    test.afterAll(async () => {
        await page.close();
    });
});