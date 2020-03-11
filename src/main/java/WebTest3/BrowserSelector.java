package WebTest3;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import java.util.concurrent.TimeUnit;

public class BrowserSelector extends Utils {
    // to setup the default browser
    public void setupBrowser() {
        LoadProp loadProp = new LoadProp();
        String browser = LoadProp.getProperty("browser");
        System.out.println(browser);
        {
            // User select chrome browser in testconfig.properties(chrome)
            if (browser.equalsIgnoreCase("chrome")) {
                // path resourced from browser driver
                System.setProperty("webdriver.chrome.driver", "src/test/resources/BrowserDriver/chromedriver.exe");
                driver = new ChromeDriver();
                driver.manage().window().fullscreen();
                driver.get(loadProp.getProperty("url"));


            }
            // User select firefox browser in testconfig.properties(firefox)
            else if (browser.equalsIgnoreCase("firefox")) {
                // path resourced from browser driver
                System.setProperty("webdriver.gecko.driver", "src/test/resources/BrowserDriver/geckodriver.exe");
                driver = new FirefoxDriver();
            }
            // User select Internet browser in testconfig.properties(ie)
            else if (browser.equalsIgnoreCase("ie")) {
                // path resourced from browser driver
                System.setProperty("webdriver.ie.driver", "src/test/resources/BrowserDriver/IEDriverServer.exe");
                driver = new InternetExplorerDriver();
            }
            driver.manage().timeouts().implicitlyWait(30, TimeUnit.MILLISECONDS);
            driver.manage().window().fullscreen();
            driver.get("https://opensource-demo.orangehrmlive.com");
        }
    }
}