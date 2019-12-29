Feature: PhpTravels - Login

  Scenario: User navigates to login page and logs in successully
    Given user is in login page of "frontend" application
    When user enters credentials for "frontend" application
    Then user expects to be navigated to "blogs" page

