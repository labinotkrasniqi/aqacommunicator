Feature: Calls

    Scenario: Login with Chat1
        Given I'm on the login page
        When I log in with Chat1
        Then I should be logged in


    Scenario: I can start a private meeting
        Given I am on start meeting page
        When I choose private call
        Then The private video call should start


    Scenario: I can toggle camera off on the call
        Given I am already on the call
        When I click on the camera button
        Then The camera should turn off


    Scenario: I can turn my camera on/off in the looby
        Given I am in the looby
        When I click on the camera button
        Then The camera should change state


    Scenario: I can turn my mic on/off in the looby
        When I click on my microphone
        Then The microphone should change state










































# Scenario: I can start a public meeting
#     Given I am on the start meeting page
#     When I click the new meeting button
#     When I choose public call
#     Then The public video call should start

# Scenario: I can leave a public meeting
#     When I click on leave call button
#     When I choose leave call
#     Then The call should end








