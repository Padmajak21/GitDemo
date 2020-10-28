Feature: Login Application Feature

Scenario: User Login Scenario
	Given User is On Application Homepage
	When Application Page title is FREE CRM
	Then user enters username and password
	And user clicks on Login Button
	When User navigate to user Profile Page
	
Scenario: Verify Duplicate Registration
	Given User is on Application Home Page
	Then User clicks on Sign-up Button
	Then USer fills the Sign-up Form
	And User Clicks the Submit Button
	Then Display User Already Registered message
	Then Navigate to reset password page