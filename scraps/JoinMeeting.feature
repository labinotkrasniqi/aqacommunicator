Feature: Start a meeting and join on that meeting with another user as a guest

 Scenario: Join a meeting
        When User A starts the call
        When User B requests to join the call 
        Then User A allows user B to enter their meeting


 Scenario: Guest is rejected from the meeting
        When User starts the call
        When Guest tries to join the call
        Then User rejects guest user from entering their meeting