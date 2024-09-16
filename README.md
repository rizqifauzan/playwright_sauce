# Web Automation Project with Playwright

## Overview

This project is designed to automate web testing using Playwright, a powerful library for end-to-end testing of modern web applications. It allows you to write tests that simulate user interactions and verify that the application behaves as expected.

## Project Structure

├── tests/
│   └── cart.test.js                      # Test spec for adding items to the cart
├── pages/
│   ├── LoginPage.js                     # Page object for the login page
│   ├── InventoryPage.js                 # Page object for the inventory page
│   └── CartPage.js                      # Page object for the cart page
├── data/
│   └── loginData.js                     # Configuration file for login credentials
├── playwright.config.js                 # Playwright configuration file
├── package.json                         # Project dependencies
└── README.md                            # Project documentation


## Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/rizqifauzan/playwright_sauce.git
    cd playwright_sauce
    ```

2. **Install Dependencies**
    ``bash
    npm install
    ```

**Configuration**
The project uses Playwright for automation and Jest for running the tests. Configuration details can be adjusted in the `playwright.config.js` file.

**Credentials**
Credentials are stored in `data/loginData.js` to avoid hardcoding sensitive information in test files. Update this file with the appropriate credentials if necessary.

**Running Tests**
To execute the test cases, use the following command:
    ``bash
    npx playwright test
    ```

To run tests in a specific browser, you can specify the browser type. For example, to run tests in Chromium:
    ``bash
    npx playwright test --project=chromium
    ```

**Test Example**
Here is an example test case for adding items to the cart:
    ``bash
    const loginData = require('./data/loginData');

    test('should add 2 items to the cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await loginPage.navigate();
    await loginPage.login(loginData.username, loginData.password);
    await inventoryPage.selectItems(2);
    await inventoryPage.goToCart();

    const cartItems = await page.$$('.cart_item');
    expect(cartItems.length).toBe(2);
    });
    ```

### Software that I use in my machine
- Node.js version 20
- A browser installed locally (Chrome and Firefox)
- playwright dependencies installed via `npm install`

### Additional Information

- **Test Framework**: Playwright
- **Assertion Library**: Playwright's built-in `expect`

### Contact

For any issues or questions, feel free to reach out via email at [sipena.id@gmail.com](mailto:sipena.id@gmail.com).
