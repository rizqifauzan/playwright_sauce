const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const loginData = require('../data/loginData');
const { runAccessibilityTest } = require('../utils/accessibilityUtils');
const { runVisualComparisonTest } = require('../utils/visualUtils');

test('should login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await expect(page).toHaveURL("https://www.saucedemo.com");

  await runVisualComparisonTest(page, 'loginpage.png');
  await runAccessibilityTest(page);

  await loginPage.login(loginData.username, loginData.password);
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
