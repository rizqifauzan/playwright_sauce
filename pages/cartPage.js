class CartPage {
    constructor(page) {
      this.page = page;
      this.cartItems = '.cart_item';
      this.removeButton = 'button.cart_button';
      this.checkoutButton = '#checkout';
    }
  
    async removeFirstItem() {
      await this.page.click(this.removeButton);
    }
  
    async checkout() {
      await this.page.click(this.checkoutButton);
    }
  }
  
  module.exports = CartPage;
  