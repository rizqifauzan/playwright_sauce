class InventoryPage {
    constructor(page) {
      this.page = page;
      this.inventoryItems = '.inventory_item';
      this.addToCartButtons = 'button.btn_inventory';
      this.cartIcon = '.shopping_cart_link';
      this.itemPrices = '.inventory_item_price';
      this.sortDropdown = '.product_sort_container';
    }

    async sortItems(order) {
      await this.page.selectOption(this.sortDropdown, order);
    }
  
    async getItemNames() {
      return await this.page.$$eval('.inventory_item_name', items =>
        items.map(item => item.textContent)
      );
    }
  
    async getItemPrices() {
      return await this.page.$$eval(this.itemPrices, prices =>
        prices.map(price => parseFloat(price.textContent.replace('$', '')))
      );
    }
  
    async addItemsToCart() {
      const addToCartButtons = await this.page.$$('.btn_primary');
      for (const button of addToCartButtons) {
        await button.click();
      }
    }

    async selectItems(numItems) {
      const items = await this.page.$$(this.addToCartButtons);
      for (let i = 0; i < numItems; i++) {
        await items[i].click();
      }
    }
  
    async goToCart() {
      await this.page.click(this.cartIcon);
    }
  }
  
  module.exports = InventoryPage;
  