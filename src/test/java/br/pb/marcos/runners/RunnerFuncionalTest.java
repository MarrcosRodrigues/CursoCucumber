package br.pb.marcos.runners;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/",
		glue = "br.pb.marcos.steps",
		plugin = {"pretty", "html:target/report-html", "json:target/report.json"},
		tags = {"@funcionais"},
		monochrome = true,
		snippets = SnippetType.CAMELCASE,
		dryRun = false,
		strict = false
		)
public class RunnerFuncionalTest {
	
	@BeforeClass
	public static void reset() {
		WebDriver driver = new FirefoxDriver();
		driver.get("https://seubarriga.wcaquino.me/");
		driver.findElement(By.id("email")).sendKeys("teste@teste21.com");
		driver.findElement(By.id("senha")).sendKeys("teste");
		driver.findElement(By.cssSelector(".btn-primary")).click();
		driver.findElement(By.linkText("reset")).click();
		driver.quit();
	}
	
	
}
