package WebTest3;

import org.openqa.selenium.By;

public class HomePage extends Utils{
    // locators for username to be enter
    private By _usernameField = By.id("txtUsername");
    // locators for password to be enter
    private By _passwordField = By.id("txtPassword");
    // locators for click the login button
    private By _loginButtonField = By.id("btnLogin");
    // locators for displaying error message
    private By _errorMsgField = By.id("spanMessage");

    // to verify user is on homepage by default
    public void verifyUserIsOnHomePage(){

    }
    // to enter username & password
    public void enterUsername(String invalid_username, String invalid_password)
    {
        EnterText(_usernameField,invalid_username);
        EnterText(_passwordField,invalid_password );
    }
    // to click on login button
    public void clickOnLogin()
    {
        clickOnElement(_loginButtonField);
    }
    public void loginErrorMsg(String ErrorMessage)
    {
        String expected = ErrorMessage;
    // will assert error message if program fails (expected,actual)
        assertTextMessage("",expected,_errorMsgField);
    }
}
