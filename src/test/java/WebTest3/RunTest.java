package WebTest3;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
// method to run the specific test by it's "tag name"
@CucumberOptions(features = ".", tags = "@orangelogin", plugin = {"pretty","html:target/Destination"}, strict = true)
// method to run the test
public class RunTest {
}
