/* eslint-disable require-jsdoc */
import Page from './base-page';
import assert from 'assert';

class HomePage extends Page {
  get title() {
    return $('.heading');
  }
  get dropDownLink() {
    return $('#content > ul > li:nth-child(11) > a');
  }

  async open() {
    await super.open();
  }

  async validateTitle() {
    const actualTitle = await this.title.getText();
    assert.equal(actualTitle, 'The Internet');
  }

  async clickDropDownLink() {
    await this.dropDownLink.click();
  }
}

export default new HomePage();
