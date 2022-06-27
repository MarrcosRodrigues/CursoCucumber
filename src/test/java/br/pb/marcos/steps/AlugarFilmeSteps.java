package br.pb.marcos.steps;

import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;

import br.pb.marcos.entidades.Filme;
import br.pb.marcos.entidades.NotaAluguel;
import br.pb.marcos.servicos.AluguelService;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;

public class AlugarFilmeSteps {

	private Filme filme;
	private AluguelService aluguel = new AluguelService();
	private NotaAluguel nota;
	
	@Dado("^um filme com estoque de (\\d+) unidades$")
	public void umFilmeComEstoqueDeUnidades(int int1) {
		filme = new Filme();
		filme.setEstoque(int1);
	}

	@Dado("^que o preco do aluguel seja de R\\$ (\\d+)$")
	public void queOPrecoDoAluguelSejaDeR$(int int1) {
		filme.setAluguel(int1);
	}

	@Quando("^alugar$")
	public void alugar() {
		nota = aluguel.alugar(filme);
	}

	@Entao("^o preco do aluguel sera R\\$ (\\d+)$")
	public void oPrecoDoAluguelSeraR$(int int1) {
//		int preco = int1;
		Assert.assertEquals(int1, nota.getPreco());
	}

	@Entao("a data de entrega sera no dia seguinte")
	public void aDataDeEntregaSeraNoDiaSeguinte() {
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DAY_OF_MONTH, 1);
		
		Date dataRetorno = nota.getDataEntrega();
		Calendar calRetorno = Calendar.getInstance();
		calRetorno.setTime(dataRetorno);
		
		Assert.assertEquals(cal.get(Calendar.DAY_OF_MONTH), calRetorno.get(Calendar.DAY_OF_MONTH));
		Assert.assertEquals(cal.get(Calendar.MONTH), calRetorno.get(Calendar.MONTH));
		Assert.assertEquals(cal.get(Calendar.YEAR), calRetorno.get(Calendar.YEAR));
	}

	@Entao("^o estoque do filme sera (\\d+) unidade$")
	public void oEstoqueDoFilmeSeraUnidade(int int1) {
		Assert.assertEquals(int1, filme.getEstoque());
		
	}

}
