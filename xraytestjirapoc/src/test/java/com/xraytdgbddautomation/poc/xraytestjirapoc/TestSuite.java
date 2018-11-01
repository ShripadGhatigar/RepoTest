package com.xraytdgbddautomation.poc.xraytestjirapoc;

//import com.kristapsmelderis.examples.selenium.Driver;
import cucumber.api.CucumberOptions;

import com.xraytdgbddautomation.poc.xraytestjirapoc.utils.MyCucumber;
import com.xraytdgbddautomation.poc.xraytestjirapoc.utils.Utils;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import static com.xraytdgbddautomation.poc.xraytestjirapoc.config.SystemProperties.*;


@RunWith(MyCucumber.class)
@CucumberOptions(
        features = {"target/TestsImportedFromJira"},
        glue = {"com.xraytdgbddautomation.poc.xraytestjirapoc.stepdef"},
        		plugin = {"html:target/cucumber", "json:target/cucumber.json"}
)
public class TestSuite {

    @BeforeClass
    public static void testSetup() {
        System.out.println("Testing is Started");
    }


    @AfterClass
    public static void teardown() {
    	System.out.println("Testing has been completed");
        Utils.exportReportToJIRA(JIRA_USERNAME, JIRA_PASSWORD, JIRA_ROOT_URL, CUCUMBER_JSON_REPORT_FILEPATH);
    }
}