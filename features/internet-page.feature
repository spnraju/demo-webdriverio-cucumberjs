Feature: The Internet app on Heroku

  Scenario: User navigates to dropdown page
    Given user is in home page of the application
    When user clicks on "dropdown" link
    Then user is navigated to "dropdown" page
