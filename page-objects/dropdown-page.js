/* eslint-disable require-jsdoc */
import Page from './base-page';

class DropDownPage extends Page {
  get pageTitle() {
    return $('#content > div > h3');
  }

  async open() {
    await super.open();
  }

  async validatePageTitle() {
    const actualTitle = await this.pageTitle.getText();
    assert.equal(actualTitle, 'Dropdown List');
  }
}

export default new DropDownPage();
