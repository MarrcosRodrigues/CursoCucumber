import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Então;
import io.cucumber.java.pt.Quando;

public class AprenderCucumber {
	
	//Cenario: Deve executar especificacao 
	@Dado("que criei o arquivo corretamente")
	public void queCrieiOArquivoCorretamente() {
		System.out.println("qualquer coisa");
	}
	@Quando("executa-lo")
	public void executaLo() {
	}
	@Entao("a especificacao deve finalizar com sucesso")
	public void aEspecificacaoDeveFinalizarComSucesso() {
	}
	
	//Cenario: Deve incrementar contador
	private Integer contador = 0;
	@Dado("que o valor do contador é {int}")
	public void queOValorDoContadorÉ(Integer int1) {
		contador = int1;
	}
	
	@Quando("eu incrementar em {int}")
	public void euIncrementarEm(Integer int1) {
		contador = contador + int1;
	}
	
	@Entao("o valor do contador sera {int}")
	public void oValorDoContadorSera(Integer int1) {
		Assert.assertEquals(int1, contador);
	}
	
	//Cenario: Deve calcular atraso na entrega
	Date entrega = new Date();
	@Dado("que a entrega é dia {int}\\/{int}\\/{int}")
	public void queAEntregaÉDia(Integer dia, Integer mes, Integer ano) {
		Calendar cal = Calendar.getInstance();
		cal.set(Calendar.DAY_OF_MONTH, dia);
		cal.set(Calendar.MONTH, mes - 1);
		cal.set(Calendar.YEAR, ano);
		entrega = cal.getTime();
	}
	
//	@Quando("a entrega atrasar em {int} dias")
	@Quando("a entrega atrasar em (\\d+) (.+)$")
	public void aEntregaAtrasarEmDias(Integer int1, String tempo) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(entrega);
		if(tempo.equals("dias")) {
			cal.add(Calendar.DAY_OF_MONTH, int1);
		}
		if(tempo.equals("meses")) {
			cal.add(Calendar.MONTH, int1);
		}
		entrega = cal.getTime();
	
	}
	
//	@Entao("a entrega sera efetuada em {int}\\/{int}\\/{int}")
//	public void aEntregaSeraEfetuadaEm(Integer int1, Integer int2, Integer int3) {
	@Entao("a entrega sera efetuada em (\\d{2}\\/\\d{2}\\/\\d{4})$")
	public void aEntregaSeraEfetuadaEm(String data) {
		DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		String dataFormatada= format.format(entrega);
		Assert.assertEquals(data, dataFormatada);
	}
	
//Desafio: REGEX
	@Dado("^que o ticket( especial)? é (A.\\d{3})$")
	public void queOTicketÉAF(String tipo, String arg1) {
	}

	@Dado("^que o valor da passagem é R\\$ (\\d+),(\\d+)$")
	public void queOValorDaPassagemÉR$(int int1, int int2) {
	}
	@Dado("^que o nome do passageiro é \"(.{5,20})\"$")
	public void queONomeDoPassageiroÉ(String string) {
	}
	@Dado("^que o telefone do passageiro é (9\\d{3}-\\d{4})$")
	public void queOTelefoneDoPassageiroÉ(String arg1) {
	}
	@Quando("^criar os steps")
	public void criarOsSteps() {
	}
	@Então("^o teste vai funcionar")
	public void oTesteVaiFuncionar() {
	}




}
