Feature: As a User 
	#I want to search the keywords in Retina application 
	#So that it should render the appropriate results and Geolocations.
	@XA-2
	Scenario: Retina Implementation
		Given I navigate to Retinal APi URL 
		And I enter text as Paris
		When I click Send Button
		Then I can find resources as Geonames and mesh2015extended in the response 
		Then response status should be 500OK
		
