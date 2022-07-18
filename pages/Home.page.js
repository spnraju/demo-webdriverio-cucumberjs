const ICN_SHOPPING_CARD = '#shopping_cart_container';

class Home {
  async validate() {
    await browser.$(ICN_SHOPPING_CARD).waitForDisplayed();
    return await browser.$(ICN_SHOPPING_CARD).isDisplayed();
  }
}
export default new Home();
