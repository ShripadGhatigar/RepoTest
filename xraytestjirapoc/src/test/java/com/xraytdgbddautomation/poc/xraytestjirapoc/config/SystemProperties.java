package com.xraytdgbddautomation.poc.xraytestjirapoc.config;

public class SystemProperties {
    //public static String CHROMEDRIVER_BINARY_PATH = System.getProperty("chromedriverBinaryPath", "src/test/resources/chromedriver.exe").toLowerCase();

    public static String JIRA_ROOT_URL = System.getProperty("jiraRootURL", "http://localhost:8080");
    public static String JIRA_USERNAME = System.getProperty("jiraUsername", "Shripad.Ghatigar");
    public static String JIRA_PASSWORD = System.getProperty("jiraPassword", "Welcome@123");
    public static String JIRA_ISSUE_KEYS = System.getProperty("jiraIssueKeys", "XPQ-7;XPQ-2");
  
    public static String IMPORTED_SCENARIO_DIRECTORY = System.getProperty("importedScenarioDirectory", "target/TestsImportedFromJira");
    public static String CUCUMBER_JSON_REPORT_FILEPATH = System.getProperty("cucumberJsonReportFilepath", "target/cucumber.json");
    
}