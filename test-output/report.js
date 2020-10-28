$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Application Feature",
  "description": "",
  "id": "login-application-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User Login Scenario",
  "description": "",
  "id": "login-application-feature;user-login-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is On Application Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Application Page title is FREE CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User navigate to user Profile Page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_application_home_page()"
});
formatter.result({
  "duration": 289731400,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:754)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:124)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:32)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:137)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:329)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:88)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:124)\r\n\tat StepDefinitions.LoginSteps.user_application_home_page(LoginSteps.java:19)\r\n\tat ✽.Given User is On Application Homepage(Login.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.application_Page_title_is_FREE_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_enters_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_navigate_to_user_Profile_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Verify Duplicate Registration",
  "description": "",
  "id": "login-application-feature;verify-duplicate-registration",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User is on Application Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Sign-up Button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "USer fills the Sign-up Form",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User Clicks the Submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Display User Already Registered message",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Navigate to reset password page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Application_Home_Page()"
});
formatter.result({
  "duration": 1443400,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat StepDefinitions.LoginSteps.user_is_on_Application_Home_Page(LoginSteps.java:51)\r\n\tat ✽.Given User is on Application Home Page(Login.feature:11)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Sign_up_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_fills_the_Sign_up_Form()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_Clicks_the_Submit_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.display_User_Already_Registered_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.navigate_to_reset_password_page()"
});
formatter.result({
  "status": "skipped"
});
});