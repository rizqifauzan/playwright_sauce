const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const loginData = require('../data/loginData');

test('should login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await expect(page).toHaveURL("https://www.saucedemo.com");

  const screenshot = await page.screenshot();
  expect(screenshot).toMatchSnapshot('loginpage.png', { 
    maxDiffPixels: 1000 }
  );
});
