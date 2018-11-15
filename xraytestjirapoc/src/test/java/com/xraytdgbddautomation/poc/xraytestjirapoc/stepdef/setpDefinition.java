package com.xraytdgbddautomation.poc.xraytestjirapoc.stepdef;


import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.matcher.ResponseAwareMatcher;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;
import io.restassured.specification.RequestSpecification;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

import org.junit.Assert;
import org.junit.Test;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class setpDefinition {
	
	public static String ApiKey ="UmV0aW5hX3VzZXI6cmV0aW5hdXNlcjEyMw== ";
	//public static RequestSpecification headerRequest;
	public static RequestSpecification  Request;
	private String URL= "http://10.10.1.186:9484/retina/pipeline/process/hbs-advanced-search-v3";
	private Response response;
	@Given("^I navigate to Retinal APi URL$")
	public void i_navigate_to_Retinal_APi_URL() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    RestAssured.baseURI =URL; 
	    Request= given()
	    		 .contentType(ContentType.JSON)
	    		 .header("apikey", "UmV0aW5hX3VzZXI6cmV0aW5hdXNlcjEyMw==");
	   
	       
	 	}

	
	@When("^I enter text as Paris$")
	public void i_enter_text_as_Paris() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	response = Request.when().body("{\"text\":\"Paris\"}").post();
		
	}

	
	@Then("^I can find resources as Geonames and mesh(\\d+)extended in the response$")
	public void i_can_find_resources_as_Geonames_and_mesh_extended_in_the_response(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		response.then().body("tokens[0].token", equalTo("Paris"))
	    .extract().response();
		String responseString = response.asString();
		//System.out.println("the resopnose String is " +responseString);
	}

	@Then("^response status should be (\\d+)OK$")
	public void response_status_should_be_OK(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		response.then().assertThat().statusCode(200);
	}

}
