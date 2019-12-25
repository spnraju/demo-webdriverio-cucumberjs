import { Given, When, Then } from 'cucumber';
import log4js from 'log4js';

let log = log4js.getLogger();

Given(/^user is in homepage of "(.*?)" application$/, appName => {
  log.info(appName);
});

When(/^user clicks on "(.*?)" from the menu$/, link => {
  log.info(link);
});

Then(/^user expects to be navigated to "(.*?)" page$/, pageName => {
  log.info(pageName);
});