// tests/checkout.test.js
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const InventoryPage = require('../pages/inventoryPage');
const CartPage = require('../pages/cartPage');
const CheckoutPage = require('../pages/checkoutPage');
const loginData = require('../data/loginData');

test.describe('Checkout Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('/');
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Add multiple items to cart and complete checkout', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Add items to cart
    await inventoryPage.addItemsToCart();

    // Validate items in cart
    await inventoryPage.goToCart();
    const itemCount = await cartPage.getNumberOfCartItems();
    expect(itemCount).toBeGreaterThan(0);

    // Checkout process
    await page.click('#checkout');
    await checkoutPage.fillForm('John', 'Doe', '12345');
    await checkoutPage.continueCheckout();
    await checkoutPage.finishCheckout();
  
    // Validate checkout completion
    const checkoutMessage = await checkoutPage.getCheckoutMessage();
    expect(checkoutMessage).toBe('Thank you for your order!');
  });
});
