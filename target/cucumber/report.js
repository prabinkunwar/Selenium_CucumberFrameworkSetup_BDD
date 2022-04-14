$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TechfiosLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios billing Login Functionality Validation",
  "description": "",
  "id": "techfios-billing-login-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TF_LoginFeature"
    },
    {
      "line": 1,
      "name": "@Login_Test_Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-billing-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@TF_login1"
    },
    {
      "line": 7,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "techfios-billing-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "techfios-billing-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc1234"
      ],
      "line": 16,
      "id": "techfios-billing-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "demo2@techfios.com",
        "abc123"
      ],
      "line": 17,
      "id": "techfios-billing-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "demo2@techfios.com",
        "abc1234"
      ],
      "line": 18,
      "id": "techfios-billing-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;4"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ],
      "line": 19,
      "id": "techfios-billing-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2536561000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Techfios_login_page()"
});
formatter.result({
  "duration": 640508800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-billing-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TF_LoginFeature"
    },
    {
      "line": 7,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@Login_Test_Regression"
    },
    {
      "line": 7,
      "name": "@TF_login1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters password as \"abc1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should land on dashboard page",
  "keyword": "Then "
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
  "duration": 2110370200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc1234",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 2059462700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_signin_button()"
});
formatter.result({
  "duration": 2386113100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 23827500,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat steps.LoginStepDefinition.user_should_land_on_dashboard_page(LoginStepDefinition.java:47)\r\n\tat ✽.Then User should land on dashboard page(features/TechfiosLogin.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 993055100,
  "status": "passed"
});
formatter.before({
  "duration": 1259628400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Techfios_login_page()"
});
formatter.result({
  "duration": 529626500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-billing-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TF_LoginFeature"
    },
    {
      "line": 7,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@Login_Test_Regression"
    },
    {
      "line": 7,
      "name": "@TF_login1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters username as \"demo2@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo2@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 2082973900,
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
  "duration": 2058891500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_signin_button()"
});
formatter.result({
  "duration": 2326043400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 13950400,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat steps.LoginStepDefinition.user_should_land_on_dashboard_page(LoginStepDefinition.java:47)\r\n\tat ✽.Then User should land on dashboard page(features/TechfiosLogin.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1002921500,
  "status": "passed"
});
formatter.before({
  "duration": 1260877300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Techfios_login_page()"
});
formatter.result({
  "duration": 524337900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-billing-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TF_LoginFeature"
    },
    {
      "line": 7,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@Login_Test_Regression"
    },
    {
      "line": 7,
      "name": "@TF_login1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters username as \"demo2@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters password as \"abc1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo2@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 2077999500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc1234",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 2055487000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_signin_button()"
});
formatter.result({
  "duration": 2342233900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 5396600,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat steps.LoginStepDefinition.user_should_land_on_dashboard_page(LoginStepDefinition.java:47)\r\n\tat ✽.Then User should land on dashboard page(features/TechfiosLogin.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 962394900,
  "status": "passed"
});
formatter.before({
  "duration": 1263182800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Techfios_login_page()"
});
formatter.result({
  "duration": 528612600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-billing-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TF_LoginFeature"
    },
    {
      "line": 7,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@Login_Test_Regression"
    },
    {
      "line": 7,
      "name": "@TF_login1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should land on dashboard page",
  "keyword": "Then "
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
  "duration": 2081230100,
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
  "duration": 2058515400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_signin_button()"
});
formatter.result({
  "duration": 2714971000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 8564100,
  "status": "passed"
});
formatter.after({
  "duration": 982970300,
  "status": "passed"
});
});