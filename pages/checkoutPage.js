class CheckoutPage {
    constructor(page) {
      this.page = page;
      this.firstNameInput = '#first-name';
      this.lastNameInput = '#last-name';
      this.postalCodeInput = '#postal-code';
      this.continueButton = '#continue';
      this.finishButton = '#finish';
    }
  
    async fillForm(firstName, lastName, postalCode) {
      await this.page.fill(this.firstNameInput, firstName);
      await this.page.fill(this.lastNameInput, lastName);
      await this.page.fill(this.postalCodeInput, postalCode);
    }
  
    async continueCheckout() {
      await this.page.click(this.continueButton);
    }
  
    async finishCheckout() {
      await this.page.click(this.finishButton);
    }
  }
  
  module.exports = CheckoutPage;
  