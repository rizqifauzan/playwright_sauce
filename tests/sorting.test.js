const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const InventoryPage = require('../pages/inventoryPage');
const loginData = require('../data/loginData');

test.describe('Sorting Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('/');
    await loginPage.login(loginData.username, loginData.password);
  });

  test('Verify sorting order Z-A', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.sortItems('za');
    const productNames = await inventoryPage.getItemNames();
    const sortedNames = [...productNames].sort().reverse();

    expect(productNames).toEqual(sortedNames);
  });

  test('Verify price order (high-low)', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.sortItems('hilo');
    const productPrices = await inventoryPage.getItemPrices();
    const sortedPrices = [...productPrices].sort((a, b) => b - a);

    expect(productPrices).toEqual(sortedPrices);
  });
});
