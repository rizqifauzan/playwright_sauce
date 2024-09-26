const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const InventoryPage = require('../pages/inventoryPage');
const loginData = require('../data/loginData');
const { waitForImagesToLoad } = require('../utils/waitUtils');
const { runAccessibilityTest } = require('../utils/accessibilityUtils');

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
    await waitForImagesToLoad(page);

    const screenshot = await page.screenshot();
    expect(screenshot).toMatchSnapshot('inventory-page-za.png', { maxDiffPixels: 1000 });

    await runAccessibilityTest(page);
  });

  test('Verify price order (high-low)', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.sortItems('hilo');
    const productPrices = await inventoryPage.getItemPrices();
    const sortedPrices = [...productPrices].sort((a, b) => b - a);
    expect(productPrices).toEqual(sortedPrices);
    await waitForImagesToLoad(page);

    const screenshot = await page.screenshot();
    expect(screenshot).toMatchSnapshot('inventory-page-hl.png', { maxDiffPixels: 1000 });
    await runAccessibilityTest(page);
  });
});
