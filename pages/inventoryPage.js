class InventoryPage {
    constructor(page) {
      this.page = page;
      this.inventoryItems = '.inventory_item';
      this.addToCartButtons = 'button.btn_inventory';
      this.cartIcon = '.shopping_cart_link';
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
  