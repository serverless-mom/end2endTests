const { expect, test } = require('@playwright/test')

test(`ordering a book`, async ({ browser }) => {
  //one Context for the user
  const userContext = await browser.newContext();
  const userPage = await userContext.newPage();
  const response = await userPage.goto('https://danube-webshop.herokuapp.com/books/1')

  const adminContext = await browser.newContext();
  //use the admincontext to check that the book was ordered

  // Test that the response did not fail
  expect(response.status(), 'should respond with correct status code').toBeLessThan(400)
})
