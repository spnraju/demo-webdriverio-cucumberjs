import { Given, When, Then } from '@cucumber/cucumber';
import { props } from '../../constants';
import assert from 'assert';

const log = log4js.getLogger();

Given(/^user is in login page of "(.*?)" application$/, (app) => {
  const url = app === 'frontend' ? props.URL.FRONT_END : props.URL.ADMIN;
  const expectedText = app === 'frontend' ? props.PAGE_TITLE.FRONT_END : props.PAGE_TITLE.ADMIN;
  browser.url(url);
  assert.equal(browser.getTitle(), expectedText); 
});

When(/^user enters credentials for "(.*?)" application$/, (link) => {
  browser.$('input[name="username"]').setValue(props.EMAIL.FRONT_END);
  browser.$('input[name="password"]').setValue(props.PASSWORD.FRONT_END);
  browser.$('.btn.btn-primary.btn-lg.btn-block.loginbtn').click();
});

Then(/^user expects to be navigated to "(.*?)" page$/, (pageName) => {
  browser.pause(5000);
  const url = browser.getUrl();
  assert.equal(url, 'https://www.phptravels.net/account/');
});
