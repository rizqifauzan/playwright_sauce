const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const InventoryPage = require('../pages/inventoryPage');
const CartPage = require('../pages/cartPage');
const CheckoutPage = require('../pages/checkoutPage');
const loginData = require('../data/loginData');

test('should complete a purchase', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.navigate();
  await loginPage.login(loginData.username, loginData.password);

  // Random selection of 2 to 4 items
  const randomItems = Math.floor(Math.random() * 3) + 2;
  await inventoryPage.selectItems(randomItems);
  await inventoryPage.goToCart();

  // Remove an item from cart
  await cartPage.removeFirstItem();

  const cartItems = await page.$$('.cart_item');
  expect(cartItems.length).toBe(randomItems-1);

  // Checkout flow
  await cartPage.checkout();
  await checkoutPage.fillForm('John', 'Doe', '12345');
  await checkoutPage.continueCheckout();
  await checkoutPage.finishCheckout();

  // Assertion: Check that the order was completed successfully
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
