import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage, HomePage } from '../../pages';

Given(/^user is in login page$/, async () => {
  await LoginPage.open();
});

When(/^user enters valid "([^"]*)?" and "([^"]*)?"$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^user should be able to see homepage$/, async () => {
  await HomePage.validate();
});
