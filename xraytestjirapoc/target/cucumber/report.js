$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("tests_imported_from_jiraXA-2.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Xray Addon : Retina Pipeline",
  "description": "",
  "id": ";xray-addon-:-retina-pipeline",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@XA-2"
    },
    {
      "line": 4,
      "name": "@XA-9"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I navigate to Retinal APi URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter text as Paris",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can find resources as Geonames and mesh2015extended in the response",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "response status should be 200OK",
  "keyword": "Then "
});
formatter.match({
  "location": "setpDefinition.i_navigate_to_Retinal_APi_URL()"
});
formatter.result({
  "duration": 708946917,
  "status": "passed"
});
formatter.match({
  "location": "setpDefinition.i_enter_text_as_Paris()"
});
formatter.result({
  "duration": 857956414,
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
  "duration": 564027982,
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
  "duration": 14203199,
  "status": "passed"
});
});