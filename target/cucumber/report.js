$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/OtherLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Other Login Functionality Validation",
  "description": "",
  "id": "other-login-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Other_LoginFeature"
    },
    {
      "line": 1,
      "name": "@Login_Test_Regression"
    }
  ]
});
formatter.before({
  "duration": 2539540700,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "other-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Other_Login1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Techfios_login_page()"
});
formatter.result({
  "duration": 649906600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 2094240300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 2054138800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_signin_button()"
});
formatter.result({
  "duration": 2657444100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 177127500,
  "status": "passed"
});
formatter.after({
  "duration": 978410100,
  "status": "passed"
});
});