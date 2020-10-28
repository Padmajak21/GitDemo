package MyTestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\Padma Reddy\\eclipse-workspace\\BDDCucumberFramework\\src\\main\\java\\features",
		glue = {"StepDefinitions"},
		format = {"pretty", "html:test-output"}
		)
public class TestRunner {

}
