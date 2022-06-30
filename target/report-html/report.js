$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/inserir_conta.feature");
formatter.feature({
  "name": "Cadastro de contas",
  "description": "Como um usuário \nGostaria de cadastrar contas\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Deve validar regras cadrasto contas",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "informo a conta \"\u003cconta\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ]
    },
    {
      "cells": [
        "Conta de Teste",
        "Conta adicionada com sucesso!"
      ]
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ]
    },
    {
      "cells": [
        "Conta mesmo nome",
        "Já existe uma conta com esse nome!"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou acessando a aplicacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o usuario \"teste@teste21.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.informoOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"teste\"",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a pagina inicial",
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPaginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve validar regras cadrasto contas",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "name": "informo a conta \"Conta de Teste\"",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "recebo a mensagem \"Conta adicionada com sucesso!\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou acessando a aplicacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o usuario \"teste@teste21.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.informoOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"teste\"",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a pagina inicial",
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPaginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve validar regras cadrasto contas",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "name": "informo a conta \"\"",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "recebo a mensagem \"Informe o nome da conta\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou acessando a aplicacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o usuario \"teste@teste21.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.informoOUsuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"teste\"",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a pagina inicial",
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPaginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve validar regras cadrasto contas",
  "description": "",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "name": "informo a conta \"Conta mesmo nome\"",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "recebo a mensagem \"Já existe uma conta com esse nome!\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "InserirContasSteps.receboAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});