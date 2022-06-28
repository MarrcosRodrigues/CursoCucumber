package br.pb.marcos.servicos;

import static br.pb.marcos.utils.DateUtils.obterDataDiferencaDias;

import br.pb.marcos.entidades.Filme;
import br.pb.marcos.entidades.NotaAluguel;
import br.pb.marcos.entidades.TipoAluguel;

public class AluguelService {

	public NotaAluguel alugar(Filme filme, TipoAluguel tipo) {
		if(filme.getEstoque() == 0) throw new RuntimeException("Filme sem estoque");
		
		NotaAluguel nota = new NotaAluguel();
		switch(tipo) {
		case COMUM:
			nota.setPreco(filme.getAluguel());
			nota.setDataEntrega(obterDataDiferencaDias(1));
			nota.setPontuacao(1);
			break;
		case EXTENDIDO:
			nota.setPreco(filme.getAluguel() * 2);
			nota.setDataEntrega(obterDataDiferencaDias(3));
			nota.setPontuacao(2);
			break;
		case SEMANAL:
			nota.setPreco(filme.getAluguel() * 3);
			nota.setDataEntrega(obterDataDiferencaDias(7));
			nota.setPontuacao(3);
			break;
		}
		filme.setEstoque(filme.getEstoque() - 1);
		return nota;
	}
	
}
