Feature: User should be able to login into Saucedemo

  Scenario: User login successfully with valid credentials
    Given user is in login page
    When user enters valid "standard_user" and "secret_sauce"
    Then user should be able to see homepage