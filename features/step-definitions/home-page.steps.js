import {Given, When, Then} from 'cucumber';
import {props} from '../../constants';
import log4js from 'log4js';
import assert from 'assert';

const log = log4js.getLogger();

Given(/^user is in login page of "(.*?)" application$/, (app) => {
  const url = app === 'frontend' ? props.URL.FRONT_END : props.URL.ADMIN;
  const expectedText = app === 'frontend' ? props.PAGE_TITLE.FRONT_END : props.PAGE_TITLE.ADMIN;
  browser.url(url);
  assert.equal(browser.getTitle(), expectedText); 
});

When(/^user enters credentials for "(.*?)" application$/, (link) => {
  browser.$('input').setValue(props.EMAIL.FRONT_END);
});

Then(/^user expects to be navigated to "(.*?)" page$/, (pageName) => {
  log.info(pageName);
});
