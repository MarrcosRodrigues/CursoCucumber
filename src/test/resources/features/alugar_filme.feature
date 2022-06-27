# language: pt
Funcionalidade:  Alugar Filme
	Como uma  usuário
	Eu quero cadrastar aluguéis de filmes
	Para controlar preços e datas de entregas
	
Cenário: Deve alugar um filme com sucesso
	Dado um filme com estoque de 2 unidades
	E que o preco do aluguel seja de R$ 3
	Quando alugar
	Entao o preco do aluguel sera R$ 3
	E a data de entrega sera no dia seguinte
	E o estoque do filme sera 1 unidade