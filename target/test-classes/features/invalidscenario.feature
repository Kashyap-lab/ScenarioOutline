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
      | Admin            | admin132         | Invalid credentials      |
      | admin            | admin321         | Invalid credentials      |
      | admin            | Admin123         | Invalid credentials      |
      | Admin            | Admin1234        | Invalid credentials      |
      |                  | admin123         | Username cannot be empty |
      | Admin            |                  | Password cannot be empty |
      |                  | Admin123         | Username cannot be empty |
      | admin            |                  | Password cannot be empty |
      |                  |                  | Username cannot be empty |


