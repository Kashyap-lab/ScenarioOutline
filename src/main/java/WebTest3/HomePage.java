package WebTest3;

import org.openqa.selenium.By;

public class HomePage extends Utils{
    private By _usernameField = By.id("txtUsername");
    private By _passwordField = By.id("txtPassword");
    private By _loginButtonField = By.id("btnLogin");
    private By _errorMsgField = By.id("spanMessage");


    public void verifyUserIsOnHomePage(){

    }



    public void enterUsername(String invalid_username, String invalid_password)
    {

        EnterText(_usernameField,invalid_username);
        EnterText(_passwordField,invalid_password );
    }



    public void clickOnLogin()
    {
        clickOnElement(_loginButtonField);
    }
    public void loginErrorMsg(String ErrorMessage)
    {
        String expected = ErrorMessage;

        assertTextMessage("",expected,_errorMsgField);
    }
}
