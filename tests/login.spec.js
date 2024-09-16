const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const loginData = require('../data/loginData');

test('should login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login(loginData.username, loginData.password);
  
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
