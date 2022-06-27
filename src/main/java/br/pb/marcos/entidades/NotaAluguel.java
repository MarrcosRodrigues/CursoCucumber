package br.pb.marcos.entidades;

import java.util.Date;

public class NotaAluguel {
	
	private int preco;
	private Date dataEntrega;
	
	public int getPreco() {
		return preco;
	}

	public void setPreco(Integer preco) {
		this.preco = preco;
	}

	public Date getDataEntrega() {
		return  dataEntrega;
	}

	public void setDataEntrega(Date time) {
		dataEntrega = time;
	}

}
