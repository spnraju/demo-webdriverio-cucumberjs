import { Given, When, Then } from '@cucumber/cucumber';
import { homePage, dropDownPage } from '../../page-objects';

// const log = log4js.getLogger();

Given(/^user is in home page of the application$/, () => {
  homePage.open;
  homePage.validateTitle;
});

When(/^user clicks on "(.*?)" link$/, (linkname) => {
  homePage.clickDropDownLink;
});

Then(/^user is navigated to "(.*?)" page$/, (pageName) => {
  dropDownPage.validatePageTitle;
});
