package br.pb.marcos.runners;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/alugar_filme.feature",
//		features = "src/test/resources/features/",
		glue = "br.pb.marcos.steps",
		plugin = {"pretty", "html:target/report-html", "json:target/report.json"},
		tags = {},
		monochrome = false,
		snippets = SnippetType.CAMELCASE,
		dryRun = false,
		strict = false
		)
public class RunnerTest {
	
	
}
