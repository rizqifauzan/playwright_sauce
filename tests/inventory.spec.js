const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const InventoryPage = require('../pages/inventoryPage');
const loginData = require('../data/loginData');

test('should add 2 items to the cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.navigate();
  await loginPage.login(loginData.username, loginData.password);
  await inventoryPage.selectItems(2);
  await inventoryPage.goToCart();

  const cartItems = await page.$$('.cart_item');
  expect(cartItems.length).toBe(2);
});
