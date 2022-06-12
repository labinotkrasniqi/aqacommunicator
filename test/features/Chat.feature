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

   Scenario: [BHC-T61] Send emoji
      When I send an emoji
      Then I should see sent emoji in the chat history

   Scenario: [BHC-T52] URLs sent should open in a new page
      Given I am on the chat page
      When I send a url message
      Then The url should open on a new page

   Scenario: [BHC-T71] Attach and send file
      Given I am on the chat page
      When I upload and send a file
      Then I should see sent file in the chat history
      