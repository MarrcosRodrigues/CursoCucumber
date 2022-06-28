package br.pb.marcos.servicos;

import static br.pb.marcos.utils.DateUtils.obterDataDiferencaDias;

import br.pb.marcos.entidades.Filme;
import br.pb.marcos.entidades.NotaAluguel;

public class AluguelService {

	public NotaAluguel alugar(Filme filme, String tipo) {
		if(filme.getEstoque() == 0) throw new RuntimeException("Filme sem estoque");
		
		NotaAluguel nota = new NotaAluguel();
		if ("extendido".equals(tipo)) {
			nota.setPreco(filme.getAluguel() * 2);
			nota.setDataEntrega(obterDataDiferencaDias(3));
			nota.setPontuacao(2);
		}else {
			nota.setPreco(filme.getAluguel());
			nota.setDataEntrega(obterDataDiferencaDias(1));
			nota.setPontuacao(1);
		}
		filme.setEstoque(filme.getEstoque() - 1);
		return nota;
	}
	
}
