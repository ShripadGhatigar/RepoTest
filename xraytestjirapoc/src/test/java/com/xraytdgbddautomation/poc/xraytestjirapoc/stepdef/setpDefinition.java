package com.xraytdgbddautomation.poc.xraytestjirapoc.stepdef;


import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class setpDefinition {
		
	@Given("^I navigate to www\\.google\\.com$")
	public void i_navigate_to_www_google_com() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Google is launched");
	}

	@When("^I enter \"([^\"]*)\"$")
	public void i_enter(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Entered the Text word");
	}

	@When("^I click magnifying glass icon$")
	public void i_click_magnifying_glass_icon() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Clicked the button");
	}

	@Then("^I can find string \"([^\"]*)\" in page$")
	public void i_can_find_string_in_page(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertNotSame("Failed", "Lastest IT", "Lastest IT");
	}

}
