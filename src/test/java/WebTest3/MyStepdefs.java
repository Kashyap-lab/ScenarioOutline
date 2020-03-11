package WebTest3;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class MyStepdefs {

    HomePage homePage = new HomePage();

    @Given("user is on homepage")
    public void userIsOnHomepage() {
        // method for user is on homepage
        homePage.verifyUserIsOnHomePage();
    }

    @When("user enter {string} and {string}")
    public void enterUsername(String invalid_username, String invalid_password)
    {
        // method for user enter invalid username & invalid password
       homePage.enterUsername(invalid_username, invalid_password );
    }

    @And("user clicks on Login")
    public void userClicksOnLogin()
    {
       // method for click on login button
        homePage.clickOnLogin();
    }

    @Then("user should able to see {string}")
    public void userShouldAbleToSee(String ErrorMessage)
    {
        // method for error message if user provides wrong credentials (username & password)
        homePage.loginErrorMsg(ErrorMessage);
    }
}