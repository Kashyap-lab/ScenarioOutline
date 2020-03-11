package WebTest3;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Utils extends BasePage {

    // Method for click on element
    public void clickOnElement(By by) { driver.findElement(by).click();   }

    // Method for wait for clickable
    public void waitForClickable(By by, int time) {
        WebDriverWait wait = new WebDriverWait(driver, time);
        wait.until(ExpectedConditions.elementToBeClickable(by));
    }
    // Method for enter text
    public void EnterText(By by, String text) {
        driver.findElement(by).sendKeys(text);
        waitForClickable(by, 40);
    }
    // Method for get text element
    public static String getTextElement(By by)
    {
        String get_text = driver.findElement( by ).getText();
        return get_text;}

    // Method for assert text message
    public static void assertTextMessage(String message, String expected, By by)
    {
        String actual = getTextElement(by);
       Assert.assertEquals(message, expected,actual);
    }

}
