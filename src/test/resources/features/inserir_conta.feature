#language: pt
@funcionais
Funcionalidade: Cadastro de contas

Como um usuário 
Gostaria de cadastrar contas
Para que eu possa distribuir meu dinheiro de uma forma mais organizada

Contexto:
Dado que estou acessando a aplicacao
Quando informo o usuario "teste@teste21.com"
E a senha "teste"
E seleciono entrar
Entao visualizo a pagina inicial
Quando seleciono Contas
E seleciono Adicionar

Esquema do Cenario: Deve validar regras cadrasto contas
E informo a conta "<conta>"
E seleciono Salvar
Entao recebo a mensagem "<mensagem>"

Exemplos:
	| conta 					| mensagem 																|
	| Conta de Teste	| Conta adicionada com sucesso!						|
	| 								| Informe o nome da conta									|
	| Conta mesmo nome| Já existe uma conta com esse nome!			|