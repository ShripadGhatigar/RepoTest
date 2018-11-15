package com.xraytdgbddautomation.poc.xraytestjirapoc.utils;


import cucumber.api.junit.Cucumber;
import cucumber.runtime.Runtime;
import cucumber.runtime.RuntimeOptions;
import cucumber.runtime.io.ResourceLoader;

import org.junit.runners.model.InitializationError;

import java.io.IOException;

import static com.xraytdgbddautomation.poc.xraytestjirapoc.config.SystemProperties.*;

//Needed to Override Cucumber.createRuntime so that tests from JIRA would be imported before createRuntime collected .features
public class MyCucumber extends Cucumber {
    public MyCucumber(Class clazz) throws InitializationError, IOException {
        super(clazz);
    }
    @Override
    protected Runtime createRuntime(ResourceLoader resourceLoader, ClassLoader classLoader, RuntimeOptions runtimeOptions) throws InitializationError, IOException {
        Utils.makeDirectory(IMPORTED_SCENARIO_DIRECTORY);
      //  Utils.importTestsFromGit(JIRA_USERNAME, JIRA_PASSWORD, JIRA_ROOT_URL, JIRA_PROJECT_KEY, IMPORTED_SCENARIO_DIRECTORY + "/tests_imported_from_jira.feature1");
      //  System.out.println(JIRA_PROJECT_KEY);
        Utils.importTestsFromJIRA(JIRA_USERNAME, JIRA_PASSWORD, JIRA_ROOT_URL, JIRA_ISSUE_KEYS, IMPORTED_SCENARIO_DIRECTORY + "/tests_imported_from_jira" +JIRA_ISSUE_KEYS+ ".feature" );
        System.out.println(JIRA_ISSUE_KEYS);
        return super.createRuntime(resourceLoader, classLoader, runtimeOptions);
    }
}
