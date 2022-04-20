Feature: Chat

   This feature holds chat testcases

   Scenario: Login with Chat1
      Given I'm on the login page
      When I log in with Chat1
      Then I should be logged in

   Scenario: Type in the message box
      Given I am on the chat page
      When I type a message
      Then I should see the typed message

   Scenario: Send message
      When I send a message
      Then I should see sent message in the chat history

   Scenario: Mute user
      When I click the mute button
      Then The user should appear muted

   Scenario: Unmute user
      When I click the mute button
      Then The user should appear unmuted

   Scenario: View pinned messages
      When I click the view pinned messages button
      Then I should see the pinned messages drawer
