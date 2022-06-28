package br.pb.marcos.steps;

import static br.pb.marcos.utils.DateUtils.obterDataDiferencaDias;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import org.junit.Assert;

import br.pb.marcos.entidades.Filme;
import br.pb.marcos.entidades.NotaAluguel;
import br.pb.marcos.entidades.TipoAluguel;
import br.pb.marcos.servicos.AluguelService;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;

public class AlugarFilmeSteps {

	private Filme filme;
	private AluguelService aluguel = new AluguelService();
	private NotaAluguel nota;
	private String erro;
	private TipoAluguel tipoAluguel;
	
	@Dado("^um filme com estoque de (\\d+) unidades$")
	public void umFilmeComEstoqueDeUnidades(int int1) {
		filme = new Filme();
		filme.setEstoque(int1);
	}

	@Dado("^que o preco do aluguel seja de R\\$ (\\d+)$")
	public void queOPrecoDoAluguelSejaDeR$(int int1) {
		filme.setAluguel(int1);
	}

	@Dado("um filme")
	public void umFilme(DataTable table) {
		Map<String, String> map = table.asMap(String.class, String.class);
		filme = new Filme();
		filme.setEstoque(Integer.parseInt(map.get("estoque")));
		filme.setAluguel(Integer.parseInt(map.get("preco")));
		String tipo = map.get("tipo");
		tipoAluguel = tipo.equals("semanal")? TipoAluguel.SEMANAL: tipo.equals("extendido")? TipoAluguel.EXTENDIDO: TipoAluguel.COMUM;
	}
	
	
	@Quando("^alugar$")
	public void alugar() {
		try {
			nota = aluguel.alugar(filme, tipoAluguel);
		} catch (RuntimeException e) {
			erro = e.getMessage();
		}
		
	}

	@Entao("^o preco do aluguel sera R\\$ (\\d+)$")
	public void oPrecoDoAluguelSeraR$(int int1) {
		Assert.assertEquals(int1, nota.getPreco());
	}

	@Entao("^o estoque do filme sera de (\\d+) unidade$")
	public void oEstoqueDoFilmeSeraUnidade(int int1) {
		Assert.assertEquals(int1, filme.getEstoque());
		
	}
	
	
// Cenario: Nao deve alugar filme sem estoque
	@Entao("^nao sera possivel por falta de estoque$")
	public void naoSeraPossivelPorFaltaDeEstoque() {
		Assert.assertEquals("Filme sem estoque", erro);
	}
	
	
// Cenario: Deve dar condicoes especiais para categoria extendida
	@Dado("que o tipo do aluguel seja (.*)$")
	public void queoTipoDoAluguelSejaExtendido(String tipo) {
		tipoAluguel = tipo.equals("semanal")? TipoAluguel.SEMANAL: tipo.equals("extendido")? TipoAluguel.EXTENDIDO: TipoAluguel.COMUM;
	}

	@Entao("^a data de entrega sera em (\\d+) dias?$")
	public void aDataDeEntregaSeraEmDias(int int1) {
		Date dataEsperada = obterDataDiferencaDias(int1);
		Date dataReal = nota.getDataEntrega();
		
		DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		
		Assert.assertEquals(format.format(dataEsperada), format.format(dataReal));
	}

	@Entao("^a pontuacao recebida sera de (\\d+) pontos$")
	public void aPontuacaoRecebidaSeraDePontos(int int1) {
		Assert.assertEquals(int1, nota.getPontuacao());
	}

	
	
}
