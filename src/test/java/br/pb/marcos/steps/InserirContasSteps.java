package br.pb.marcos.steps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import io.cucumber.java.After;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;

public class InserirContasSteps {
	
	private WebDriver driver;
	
	//Deve inserir uma conta com sucesso
	@Dado("que estou acessando a aplicacao")
	public void queEstouAcessandoAAplicacao() {
		driver = new FirefoxDriver();
		driver.get("https://seubarriga.wcaquino.me/");
	}

	@Quando("informo o usuario {string}")
	public void informoOUsuario(String string) {
		driver.findElement(By.id("email")).sendKeys(string);
	}

	@Quando("a senha {string}")
	public void aSenha(String string) {
		driver.findElement(By.id("senha")).sendKeys(string);
	}

	@Quando("seleciono entrar")
	public void selecionoEntrar() {
		driver.findElement(By.cssSelector(".btn-primary")).click();
	}

	@Entao("visualizo a pagina inicial")
	public void visualizoAPaginaInicial() {
		String texto = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText(); 
		Assert.assertEquals("Bem vindo, teste1!", texto);
	}

	@Quando("seleciono Contas")
	public void selecionoContas() {
		driver.findElement(By.linkText("Contas")).click();
	}

	@Quando("seleciono Adicionar")
	public void selecionoAdicionar() {
		driver.findElement(By.linkText("Adicionar")).click();
	}

	@Quando("informo a conta {string}")
	public void informoAConta(String string) {
		driver.findElement(By.id("nome")).sendKeys(string);
	}

	@Quando("seleciono Salvar")
	public void selecionoSalvar() {
		driver.findElement(By.tagName("button")).click();
	}

	@Entao("a conta e inserida com sucesso")
	public void aContaEInseridaComSucesso() {
		String texto = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText(); 
		Assert.assertEquals("Conta adicionada com sucesso!", texto);
	}
	
	//Nao deve inserir uma conta sem nome
	@Entao("sou notificar que o nome da conta e obrigatorio")
	public void souNotificarQueONomeDaContaEObrigatorio() {
		String texto = driver.findElement(By.xpath("//div[@class='alert alert-danger']")).getText(); 
		Assert.assertEquals("Informe o nome da conta", texto);
	}
	
	//Nao deve inserir uma conta com nome já existente
	@Entao("sou notificado que ja existe uma conta com esse nome")
	public void souNotificadoQueJaExisteUmaContaComEsseNome() {
		String texto = driver.findElement(By.xpath("//div[starts-with(@class, 'alert alert-')]")).getText(); 
		Assert.assertEquals("Já existe uma conta com esse nome!", texto);
	}
	
	@Entao("recebo a mensagem {string}")
	public void receboAMensagem(String string) {
		String texto = driver.findElement(By.xpath("//div[starts-with(@class, 'alert alert-')]")).getText(); 
		Assert.assertEquals(string, texto);
	}
	
	@After
	public void fecharBrowser() {
		driver.quit();
	}
}
