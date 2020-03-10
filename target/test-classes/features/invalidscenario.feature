Feature: user should not be able to login successfully with invalid credential

  Background:
    Given user is on homepage

  @orangelogin
  Scenario Outline: user should not be able to login successfully with invalid credentials

    When user enter "<invalid_username>" and "<invalid_password>"
    And user clicks on Login
    Then user should able to see "<ErrorMessage>"
    Examples:
      | invalid_username | invalid_password | ErrorMessage             |
      | Admin            | admin132         | Invalid credentials 1     |
      | admin            | admin321         | Invalid credentials 1     |
      | admin            | Admin123         | Invalid credentials   1   |
      | Admin            | Admin1234        | Invalid credentials    1  |
      |                  | admin123         | Username cannot be empty1 |
      | Admin            |                  | Password cannot be empty1 |
      |                  | Admin123         | Username cannot be empty1 |
      | admin            |                  | Password cannot be empty1 |
      |                  |                  | Username cannot be empty1 |


