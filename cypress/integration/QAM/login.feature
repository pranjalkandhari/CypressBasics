Feature: Login

    I want to log into Conduit

    @smoke
    Scenario: Conduit Login
    Given I open Conduit login page
    When I type in 
        | username | password |
        | pranjalkandhari@gmail.com | samplePass |
    And I click Sign in button
    Then "Your Feed" should be shown