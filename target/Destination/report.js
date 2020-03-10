$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/invalidscenario.feature");
formatter.feature({
  "name": "user should not be able to login successfully with invalid credential",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "user should not be able to login successfully with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@orangelogin"
    }
  ]
});
formatter.step({
  "name": "user enter \"\u003cinvalid_username\u003e\" and \"\u003cinvalid_password\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on Login",
  "keyword": "And "
});
formatter.step({
  "name": "user should able to see \"\u003cErrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "invalid_username",
        "invalid_password",
        "ErrorMessage"
      ]
    },
    {
      "cells": [
        "Admin",
        "admin132",
        "Invalid credentials 1"
      ]
    },
    {
      "cells": [
        "admin",
        "admin321",
        "Invalid credentials 1"
      ]
    },
    {
      "cells": [
        "admin",
        "Admin123",
        "Invalid credentials   1"
      ]
    },
    {
      "cells": [
        "Admin",
        "Admin1234",
        "Invalid credentials    1"
      ]
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty1"
      ]
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty1"
      ]
    },
    {
      "cells": [
        "",
        "Admin123",
        "Username cannot be empty1"
      ]
    },
    {
      "cells": [
        "admin",
        "",
        "Password cannot be empty1"
      ]
    },
    {
      "cells": [
        "",
        "",
        "Username cannot be empty1"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest3.MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able to login successfully with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@orangelogin"
    }
  ]
});
formatter.step({
  "name": "user enter \"Admin\" and \"admin132\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest3.MyStepdefs.enterUsername(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest3.MyStepdefs.userClicksOnLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should able to see \"Invalid credentials 1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest3.MyStepdefs.userShouldAbleToSee(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cInvalid credentials[ 1]\u003e but was:\u003cInvalid credentials[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat WebTest3.Utils.assertTextMessage(Utils.java:52)\r\n\tat WebTest3.HomePage.loginErrorMsg(HomePage.java:35)\r\n\tat WebTest3.MyStepdefs.userShouldAbleToSee(MyStepdefs.java:37)\r\n\tat ✽.user should able to see \"Invalid credentials 1\"(file:///C:/Users/Kash/IdeaProjects/ScenarioOutline/./src/test/resources/features/invalidscenario.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest3.MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user should not be able to login successfully with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@orangelogin"
    }
  ]
});
formatter.step({
  "name": "user enter \"admin\" and \"admin321\"",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest3.MyStepdefs.enterUsername(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest3.MyStepdefs.userClicksOnLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should able to see \"Invalid credentials 1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest3.MyStepdefs.userShouldAbleToSee(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cInvalid credentials[ 1]\u003e but was:\u003cInvalid credentials[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat WebTest3.Utils.assertTextMessage(Utils.java:52)\r\n\tat WebTest3.HomePage.loginErrorMsg(HomePage.java:35)\r\n\tat WebTest3.MyStepdefs.userShouldAbleToSee(MyStepdefs.java:37)\r\n\tat ✽.user should able to see \"Invalid credentials 1\"(file:///C:/Users/Kash/IdeaProjects/ScenarioOutline/./src/test/resources/features/invalidscenario.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
