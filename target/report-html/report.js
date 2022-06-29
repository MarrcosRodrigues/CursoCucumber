$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/aprender_cucumber.feature");
formatter.feature({
  "name": "Aprender Cucumber",
  "description": "\tComo um aluno\n\tEu quero aparender a utilizar Cucumber\n\tPara que eu possa automatizar critérios de aceitação",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Deve executar especificacao",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "que criei o arquivo corretamente",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queCrieiOArquivoCorretamente()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "executa-lo",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.executaLo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a especificacao deve finalizar com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "AprenderCucumberSteps.aEspecificacaoDeveFinalizarComSucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve incrementar contador",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "que o valor do contador é 15",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOValorDoContadorÉ(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu incrementar em 3",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.euIncrementarEm(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o valor do contador sera 18",
  "keyword": "Entao "
});
formatter.match({
  "location": "AprenderCucumberSteps.oValorDoContadorSera(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve incrementar contador",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@tipo1"
    }
  ]
});
formatter.step({
  "name": "que o valor do contador é 123",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOValorDoContadorÉ(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu incrementar em 35",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.euIncrementarEm(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o valor do contador sera 158",
  "keyword": "Entao "
});
formatter.match({
  "location": "AprenderCucumberSteps.oValorDoContadorSera(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve calcular atraso na entrega",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@tipo2"
    }
  ]
});
formatter.step({
  "name": "que a entrega é dia 05/04/2018",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "a entrega atrasar em 2 dias",
  "keyword": "Quando "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "a entrega sera efetuada em 07/04/2018",
  "keyword": "Entao "
});
formatter.match({
  "location": "AprenderCucumberSteps.aEntregaSeraEfetuadaEm(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Deve calcular atraso na entrega da china",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@tipo1"
    },
    {
      "name": "@tipo2"
    }
  ]
});
formatter.step({
  "name": "que a entrega é dia 05/04/2018",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "a entrega atrasar em 2 meses",
  "keyword": "Quando "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "a entrega sera efetuada em 05/06/2018",
  "keyword": "Entao "
});
formatter.match({
  "location": "AprenderCucumberSteps.aEntregaSeraEfetuadaEm(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Deve criar steps genéricos para estes passos",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "que o ticket é AF345",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTicketÉAF(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o valor da passagem é R$ 230,45",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOValorDaPassagemÉR$(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o nome do passageiro é \"Fulano da Silva\"",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.queONomeDoPassageiroÉ(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o telefone do passageiro é 9999-9999",
  "keyword": "E "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTelefoneDoPassageiroÉ(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "criar os steps",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.criarOsSteps()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o teste vai funcionar",
  "keyword": "Então "
});
formatter.match({
  "location": "AprenderCucumberSteps.oTesteVaiFuncionar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve reaproveitar os steps \"Dado\" do cenário anterior",
  "description": "",
  "keyword": "Cenario"
});
formatter.step({
  "name": "que o ticket é AB167",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTicketÉAF(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o ticket especial é AB167",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTicketÉAF(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o valor da passagem é R$ 1120,23",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOValorDaPassagemÉR$(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o nome do passageiro é \"Cicrano de Oliveira\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queONomeDoPassageiroÉ(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o telefone do passageiro é 9888-8888",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTelefoneDoPassageiroÉ(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve negar todos os steps \"Dado\" dos cenários anteriores",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "name": "que o ticket é CD123",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "que o ticket é AG1234",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "que o valor da passagem é R$ 1.1345,56",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOValorDaPassagemÉR$(Double)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "que o nome do passageiro é \"Beltrano Souza Matos de Alcântara Azevedo\"",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "que o telefone do passageiro é 1234-5678",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "que o telefone do passageiro é 999-2223",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});