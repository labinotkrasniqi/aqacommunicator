Feature: Onboarding

   #  This feature will contain tests regarding user-login checks, and user reset password.

   Scenario: User can log in with valid credentials
      Given I'm on the login page
      When I log in with a test user
      Then I should be logged in


   Scenario: User can logout
      Given I am logged In
      When User logs out
      Then I should be on the logging page

#  This is blocked due to not being able to try login with the same account without blocking the account
#  Scenario: User cannot log in with invalid credentials
#       Given I'm on the login page
#       When I log in with a test user with invalid credentials
#       Then Login is unsucessful





