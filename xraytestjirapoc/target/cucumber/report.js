$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("tests_imported_from_jira.feature");
formatter.feature({
  "line": 2,
  "name": "Implement New Contact Page",
  "description": "",
  "id": "implement-new-contact-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@XPQ-1"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Desc Implement New Contact Page"
    }
  ],
  "line": 7,
  "name": "Automation With Maven Build",
  "description": "",
  "id": "implement-new-contact-page;automation-with-maven-build",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@XPQ-7"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I navigate to www.google.com",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter \"latest tech in IT\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click magnifying glass icon",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can find string \"latest tech in IT\" in page",
  "keyword": "Then "
});
formatter.match({
  "location": "setpDefinition.i_navigate_to_www_google_com()"
});
formatter.result({
  "duration": 142618324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "latest tech in IT",
      "offset": 9
    }
  ],
  "location": "setpDefinition.i_enter(String)"
});
formatter.result({
  "duration": 2792018,
  "status": "passed"
});
formatter.match({
  "location": "setpDefinition.i_click_magnifying_glass_icon()"
});
formatter.result({
  "duration": 181883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "latest tech in IT",
      "offset": 19
    }
  ],
  "location": "setpDefinition.i_can_find_string_in_page(String)"
});
formatter.result({
  "duration": 2465933,
  "error_message": "java.lang.AssertionError: Failed expected not same\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failSame(Assert.java:819)\r\n\tat org.junit.Assert.assertNotSame(Assert.java:798)\r\n\tat com.xraytdgbddautomation.poc.xraytestjirapoc.stepdef.setpDefinition.i_can_find_string_in_page(setpDefinition.java:33)\r\n\tat ✽.Then I can find string \"latest tech in IT\" in page(tests_imported_from_jira.feature:11)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 15,
  "name": "Test case summary",
  "description": "",
  "id": "implement-new-contact-page;test-case-summary",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@XPQ-2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I navigate to www.google.com",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I enter \"latest tech in IT\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click magnifying glass icon",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can find string \"latest tech in IT\" in page",
  "keyword": "Then "
});
formatter.match({
  "location": "setpDefinition.i_navigate_to_www_google_com()"
});
formatter.result({
  "duration": 82246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "latest tech in IT",
      "offset": 9
    }
  ],
  "location": "setpDefinition.i_enter(String)"
});
formatter.result({
  "duration": 107970,
  "status": "passed"
});
formatter.match({
  "location": "setpDefinition.i_click_magnifying_glass_icon()"
});
formatter.result({
  "duration": 173550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "latest tech in IT",
      "offset": 19
    }
  ],
  "location": "setpDefinition.i_can_find_string_in_page(String)"
});
formatter.result({
  "duration": 249274,
  "error_message": "java.lang.AssertionError: Failed expected not same\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failSame(Assert.java:819)\r\n\tat org.junit.Assert.assertNotSame(Assert.java:798)\r\n\tat com.xraytdgbddautomation.poc.xraytestjirapoc.stepdef.setpDefinition.i_can_find_string_in_page(setpDefinition.java:33)\r\n\tat ✽.Then I can find string \"latest tech in IT\" in page(tests_imported_from_jira.feature:19)\r\n",
  "status": "failed"
});
});