package WebTest3;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class LoadProp {
    static Properties prop;
    static FileInputStream input;
    //static String filename = "testconfig.properties";
    static String filelocation = "src/test/resources/TestData/testconfig.properties";

    static String getProperty(String key) {
        prop = new Properties();
        try {
            input = new FileInputStream(filelocation );
            prop.load(input);
            input.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return prop.getProperty(key);
    }
}
