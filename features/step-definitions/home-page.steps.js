import {Given, When, Then} from 'cucumber';
import {props} from '../../constants';
import log4js from 'log4js';

const log = log4js.getLogger();

Given(/^user is in homepage of "(.*?)" application$/, (appName) => {
  console.error(props.EMAIL.ADMIN);
});

When(/^user clicks on "(.*?)" from the menu$/, (link) => {
  log.info(link);
});

Then(/^user expects to be navigated to "(.*?)" page$/, (pageName) => {
  log.info(pageName);
});
