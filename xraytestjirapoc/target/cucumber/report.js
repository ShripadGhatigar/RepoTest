$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("tests_imported_from_jira.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#As a User "
    },
    {
      "line": 4,
      "value": "#"
    },
    {
      "line": 5,
      "value": "#I want to search the keywords in Retina application "
    },
    {
      "line": 6,
      "value": "#"
    },
    {
      "line": 7,
      "value": "#So that it should render the appropriate results and Geolocations."
    }
  ],
  "line": 9,
  "name": "Retina Implementation",
  "description": "",
  "id": ";retina-implementation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@XPQ-24"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I navigate to Retinal APi URL",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter text as Paris",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click Send Button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I can find resources as Geonames and mesh2015extended in the response",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "response status should be 200OK",
  "keyword": "Then "
});
formatter.match({
  "location": "setpDefinition.i_navigate_to_Retinal_APi_URL()"
});
formatter.result({
  "duration": 18994579374,
  "status": "passed"
});
formatter.match({
  "location": "setpDefinition.i_enter_text_as_Paris()"
});
formatter.result({
  "duration": 5544952868,
  "status": "passed"
});
formatter.match({
  "location": "setpDefinition.i_click_Send_Button()"
});
formatter.result({
  "duration": 170986514,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2015",
      "offset": 41
    }
  ],
  "location": "setpDefinition.i_can_find_resources_as_Geonames_and_mesh_extended_in_the_response(int)"
});
formatter.result({
  "duration": 1984398262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 26
    }
  ],
  "location": "setpDefinition.response_status_should_be_OK(int)"
});
formatter.result({
  "duration": 89362623,
  "status": "passed"
});
});