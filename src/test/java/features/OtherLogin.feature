@Other_LoginFeature @Login_Test_Regression
Feature: Other Login Functionality Validation


@Other_Login1
Scenario: User should be able to login with valid credentials
	Given User is on Techfios login page
	When User enters username as "demo@techfios.com"
	When User enters password as "abc123"
	When User clicks signin button
	Then User should land on dashboard page


@Other_Login2 @smoke
Scenario: User should be able to login with valid credentials
	Given User is on Techfios login page
	When User enters username as "demo2@techfios.com"
	When User enters password as "abc123"
	When User clicks signin button
	Then User should land on dashboard page