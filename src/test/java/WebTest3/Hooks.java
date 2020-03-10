package WebTest3;



import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import static com.sun.deploy.cache.Cache.copyFile;

public class Hooks extends Utils{

    private String timestamp = new SimpleDateFormat("yyyy.MM.DD.HH.MM.SS").format(new Date( ));
    BrowserSelector browserSelector = new BrowserSelector();

    @Before
    public void openBrowser() { browserSelector.setupBrowser();}

    @After
    public void closeBrowser (Scenario scenario) throws IOException
    {
        if (scenario.isFailed( ))
        {
            String screenshotName = scenario.getName().replaceAll("[.,:;?!]", "") + timestamp + ".png";
            try {
                //This takes a screenshot from the driver at save it to the specified location
                File sourcePath = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
                //Building up the destination path for the screenshot to save
                // Also make sure to create a folder 'screenshots' with in the cucumber-report folder
                File destinationPath = new File(System.getProperty("user.dir") + "target/Destination/screenshot" + screenshotName);
                //copy taken screenshot from source location to destination location
                copyFile(sourcePath, destinationPath);
                scenario.write("!!!!....Scenario Failed....!!!! Please see attached screenshot for the error/issue");
                // Attach the screenshot to our report
                // Scenario.embed (((TakeScreenshot)driver).getScreenshotAs(outputType.BYTES), "image/png")
                scenario.embed(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES), "image/png");
            }
            catch (IOException e)
            {

            }
        }
        driver.quit();
    }
  }