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

   Scenario: Favorite user
      When I click the favorite button
      Then The user should appear favorited

   Scenario: Unfavorite user
      When I click the favorite button
      Then The user should appear unfavorited

   Scenario: [BHC-T61] Send emoji
      When I send an emoji
      Then I should see sent emoji in the chat history

   Scenario: [BHC-T52] URLs sent should open in a new page
      When I send a url message
      Then The url should open on a new page

   Scenario: [BHC-T71] Attach and send file
      When I upload and send a file
      Then I should see sent file in the chat history

   Scenario: [BHC-T75] View pinned messages
      When I click the view pinned messages button
      Then I should see the pinned messages drawer
   
   Scenario: [BHC-T75] Unpin message from pinned messages drawer
      When I click the view pinned messages button
      And I un-pin a pinned message

   Scenario: [BHC-T117] Viewing pinned message should redirect to that message
      When I click to view a pinned message
      Then I should see clicked message in the chat history
   
   Scenario: [BHC-T51] Receive message from user
      When I message Chat2 user
      And User logs out
      And I log in with Chat2
      And I find the recipient
      Then I should see my sent message in chat history

### Group Chat test cases

   Scenario: [BHC-T98] Send message to group
      Given I refresh the page
      And I am on a group chat page
      When I type a message
      And I send a message
      Then I should see sent message in the chat history

   Scenario: Mute group chat notifications
      When I click the mute group button
      Then The group should appear muted

   Scenario: Un-mute group chat notifications
      When I click the mute group button
      Then The group should appear unmuted

   Scenario: Favorite group
      When I click the favorite button
      Then The user should appear favorited

   Scenario: Unfavorite group
      When I click the favorite button
      Then The user should appear unfavorited
   
   Scenario: [BHC-T106] View pinned group messages
      When I click the view pinned messages button
      Then I should see the pinned messages drawer

   Scenario: [BHC-T102] Attach and send file in group
      When I upload and send a file
      Then I should see sent file in the chat history

   Scenario: [BHC-T101] Send emoji to group
      When I send an emoji
      Then I should see sent emoji in the chat history

   Scenario: [BHC-T100] URLs sent to group should open in a new page
      When I send a url message
      Then The url should open on a new page