Feature: Home page

  Scenario: User navigates to blogs section from home page
    Given user is in homepage of "frontend" application
    When user clicks on "blog" from the menu
    Then user expects to be navigated to "blogs" page

