package StepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {

	WebDriver driver;
	
	
	@Given("^User is On Application Homepage$")
	public void user_application_home_page() {

		driver = new ChromeDriver();

	}
	

	@When("^Application Page title is FREE CRM$")
	public void application_Page_title_is_FREE_CRM() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
	
	@Then("^user enters username and password$")
	public void user_enters_username_and_password() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
	
	@Then("^user clicks on Login Button$")
	public void user_clicks_on_Login_Button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
	
	@When("^User navigate to user Profile Page$")
	public void user_navigate_to_user_Profile_Page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
	
	@Given("^User is on Application Home Page$")
	public void user_is_on_Application_Home_Page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
	
	@Then("^User clicks on Sign-up Button$")
	public void user_clicks_on_Sign_up_Button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
	
	@Then("^USer fills the Sign-up Form$")
	public void user_fills_the_Sign_up_Form() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
	
	@Then("^User Clicks the Submit Button$")
	public void user_Clicks_the_Submit_Button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
	
	@Then("^Display User Already Registered message$")
	public void display_User_Already_Registered_message() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
	
	@Then("^Navigate to reset password page$")
	public void navigate_to_reset_password_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	
}
