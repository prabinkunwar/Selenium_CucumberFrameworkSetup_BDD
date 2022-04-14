@TF_LoginFeature @Login_Test_Regression
Feature: Techfios billing Login Functionality Validation

  Background: 
    Given User is on Techfios login page

  @TF_login1 @smoke
  Scenario Outline: User should be able to login with valid credentials
    When User enters username as "<username>"
    When User enters password as "<password>"
    When User clicks signin button
    Then User should land on dashboard page

    Examples: 
      | username           | password |
      | demo@techfios.com  | abc1234  |
      | demo2@techfios.com | abc123   |
      | demo2@techfios.com | abc1234  |
      | demo@techfios.com  | abc123   |
      
      
      
  #@TF_login2
  #Scenario: User should be able to login with valid credentials
    #When User enters username as "demo2@techfios.com"
    #When User enters password as "abc123"
    #When User clicks signin button
    #Then User should land on dashboard page
#
  #@TF_login3
  #Scenario: User should be able to login with valid credentials
    #When User enters username as "demo2@techfios.com"
    #When User enters password as "abc1234"
    #When User clicks signin button
    #Then User should land on dashboard page
#
  #@TF_login4
  #Scenario: User should be able to login with valid credentials
    #When User enters username as "demo@techfios.com"
    #When User enters password as "abc123"
    #When User clicks signin button
    #Then User should land on dashboard page
