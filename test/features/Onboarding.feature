Feature: Onboarding

   #  This feature will contain onboarding tests

   Scenario: [BHC-T11] User cannot log in with empty username and password
      Given I'm on the login page
      When I log in with empty username
      Then I should be on the logging page

   Scenario: [BHC-T2] User can log in with valid credentials
      Given I'm on the login page
      When I log in with a test user
      Then I should be logged in

   Scenario: [BHC-T22] User can logout
      Given I am logged In
      When User logs out
      Then I should be on the logging page

   Scenario: [BHC-T21] Navigate to reset password page
      Given I'm on the login page
      When I proceed with only username
      And I click the forgot password link
      Then I should be on the reset password page
   
   Scenario: [BHC-T88] Navigate to login page from reset password page
      When I click back to communicator client button
      Then I should be on the logging page

   Scenario: [BHC-T70] Show edit email button on login
      Given I'm on the login page
      When I proceed with only username
      Then I should see the edit email button

   Scenario: [BHC-T86] Password should be hidden by default
      When I enter a password
      Then Password should be hidden

   Scenario: [BHC-T87] Password should be hidden by default
      When I click the hide/show password button
      Then Password should be visible

#  This is blocked due to not being able to try login with the same account without blocking the account
#  Scenario: User cannot log in with invalid credentials
#       Given I'm on the login page
#       When I log in with a test user with invalid credentials
#       Then Login is unsucessful
