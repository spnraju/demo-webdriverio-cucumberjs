const IPT_USERNAME = '#user-name';
const IPT_PASSWORD = '#password';
const BTN_LOGIN = '#login-button';
const LOGO_SAUCE = '.login_logo';

class Login {
  async open() {
    await browser.url('/');
    await browser.$(LOGO_SAUCE).waitForEnabled();
  }

  async login(username, password) {
    await browser.$(IPT_USERNAME).setValue(username);
    await browser.$(IPT_PASSWORD).setValue(password);
    await browser.$(BTN_LOGIN).click();
  }
}
export default new Login();
