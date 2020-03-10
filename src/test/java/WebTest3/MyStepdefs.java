package WebTest3;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;



public class MyStepdefs {

    HomePage homePage = new HomePage();

    @Given("user is on homepage")
    public void userIsOnHomepage() {
        homePage.verifyUserIsOnHomePage();
    }

    @When("user enter {string} and {string}")
    public void enterUsername(String invalid_username, String invalid_password)
    {
       homePage.enterUsername(invalid_username, invalid_password );


    }


    @And("user clicks on Login")
    public void userClicksOnLogin()
    {
       // homePage.userClickOnLogin();
        homePage.clickOnLogin();
    }

    @Then("user should able to see {string}")
    public void userShouldAbleToSee(String ErrorMessage)
    {homePage.loginErrorMsg(ErrorMessage);

    }
}