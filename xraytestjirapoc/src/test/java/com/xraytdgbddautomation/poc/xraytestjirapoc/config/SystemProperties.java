package com.xraytdgbddautomation.poc.xraytestjirapoc.config;

public class SystemProperties {
    //public static String CHROMEDRIVER_BINARY_PATH = System.getProperty("chromedriverBinaryPath", "src/test/resources/chromedriver.exe").toLowerCase();

    public static String JIRA_ROOT_URL = System.getProperty("jiraRootURL", "http://tdgteams-dev.jira.thedigitalgroup.com:8080");
	//public static String JIRA_ROOT_URL = System.getProperty("jiraRootURL", "https://tdgteams-dev.atlassian.net");
    public static String JIRA_USERNAME = System.getProperty("jiraUsername", "ShripadG");
   public static String JIRA_PASSWORD = System.getProperty("jiraPassword", "Welcome@1");
	
	//public static String JIRA_USERNAME = System.getProperty("jiraUsername", "Raja.Deshapu");
   // public static String JIRA_PASSWORD = System.getProperty("jiraPassword", "Tirumala!d8");
  // public static String JIRA_PROJECT_KEY = System.getProperty("jiraprojectKey", "XA");
    public static String JIRA_ISSUE_KEYS = System.getProperty("jiraIssueKeys", "XA-2");
  
    public static String IMPORTED_SCENARIO_DIRECTORY = System.getProperty("importedScenarioDirectory", "target/TestsImportedFromJira");
    public static String CUCUMBER_JSON_REPORT_FILEPATH = System.getProperty("cucumberJsonReportFilepath", "target/cucumber.json");
    
}