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
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "admin",
        "admin321",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "admin",
        "Admin123",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "Admin",
        "Admin1234",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "Admin123",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "admin",
        "",
        "Password cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "",
        "Username cannot be empty"
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
  "name": "user should able to see \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest3.MyStepdefs.userShouldAbleToSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
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
  "name": "user should able to see \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest3.MyStepdefs.userShouldAbleToSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
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
  "name": "user enter \"admin\" and \"Admin123\"",
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
  "name": "user should able to see \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest3.MyStepdefs.userShouldAbleToSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
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
  "name": "user enter \"Admin\" and \"Admin1234\"",
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
  "name": "user should able to see \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest3.MyStepdefs.userShouldAbleToSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
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
  "name": "user enter \"\" and \"admin123\"",
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
  "name": "user should able to see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest3.MyStepdefs.userShouldAbleToSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
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
  "name": "user enter \"Admin\" and \"\"",
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
  "name": "user should able to see \"Password cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest3.MyStepdefs.userShouldAbleToSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
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
  "name": "user enter \"\" and \"Admin123\"",
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
  "name": "user should able to see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest3.MyStepdefs.userShouldAbleToSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
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
  "name": "user enter \"admin\" and \"\"",
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
  "name": "user should able to see \"Password cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest3.MyStepdefs.userShouldAbleToSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
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
  "name": "user enter \"\" and \"\"",
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
  "name": "user should able to see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest3.MyStepdefs.userShouldAbleToSee(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});