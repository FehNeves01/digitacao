/* global fetch */
var numeroViagem;
var horaViagens;

async function buscaPesquisas() {
    var urlJson = await todasAsBuscas("./urlsJSON.json");
    var url = urlJson.exportar.apidados + "?acao=buscaPesquisas";
    var dados = await todasAsBuscas(url);
    var corpoGroup = document.getElementById("groupPesquisas");

    var listaCabecalho = document.createElement("ul");
    for (var i = 0, max = dados.length; i < max; i++) {
        var aPesquisa = document.createElement("li");
        aPesquisa.id = i;
        aPesquisa.className = "dropdown-item";
        aPesquisa.setAttribute("onclick", "selecionando(this.id)");
        aPesquisa.value = dados[i].id;
        aPesquisa.textContent = dados[i].id;
        listaCabecalho.appendChild(aPesquisa);
        corpoGroup.appendChild(listaCabecalho);
    }
}

async function selecionando(id) {
    var elementoSelecionado = document.getElementById(id);
    var valorElementoSelecionado = elementoSelecionado.textContent;
    document.getElementById("dropdownMenuButton").textContent = valorElementoSelecionado;
    var urlJson = await todasAsBuscas("./urlsJSON.json");
    var parametroBusca = "&idCasa=" + valorElementoSelecionado;
    url = urlJson.exportar.apidados + "?acao=buscarPesquisaSelecionadaMoradores" + parametroBusca;
    var dadosPesquisaSelecionadaMoradores = await todasAsBuscas(url);
    url = urlJson.exportar.apidados + "?acao=buscarPesquisaSelecionadaCasa" + parametroBusca;
    var dadosPesquisaSelecionadaCasa = await todasAsBuscas(url);
//    zerarCorpoGroup("groupPesquisas");
    zerarCorpoGroup("groupPesquisasPessoa");
    zerarCorpoGroup("groupPesquisasViagens");
    zerarCorpoTabela("tabelaMoradores");
    zerarCorpoTabela("viajens");

    document.getElementById("dropdownMenuButtonPessoa").textContent = "Seleciona Número Pessoa";
    document.getElementById("dropdownMenuButtonViagem").textContent = "Seleciona Número Viagem";
    limparCamposPessoas();
    limparCamposViagens();
    organiInputsCasa(dadosPesquisaSelecionadaCasa);
    organizaGroupPessoas(dadosPesquisaSelecionadaMoradores);

}

function organizaGroupPessoas(dados) {
    var corpoGrupoPessoas = document.getElementById("groupPesquisasPessoa");
    var listaCabecalho = document.createElement("ul");
    for (var i = 0, max = dados.length; i < max; i++) {
        var aPesquisa = document.createElement("li");
        aPesquisa.id = i + "groupPesquisasPessoa";
        aPesquisa.className = "dropdown-item";
        aPesquisa.setAttribute("onclick", "pessoaEscolhida(this.id)");
        aPesquisa.value = dados[i].numeroPessoa;
        aPesquisa.textContent = dados[i].numeroPessoa;
        listaCabecalho.appendChild(aPesquisa);
        corpoGrupoPessoas.appendChild(listaCabecalho);
    }

}

function pessoaEscolhida(id) {

    var elementoSelecionado = document.getElementById(id);
    var valorElementoSelecionado = elementoSelecionado.textContent;
    document.getElementById("dropdownMenuButtonPessoa").textContent = valorElementoSelecionado;

    var numeroSelecionado = document.getElementById("dropdownMenuButtonPessoa").textContent;
    var parametros = "&numeroPessoaSelecionada=" + numeroSelecionado + "&numeroPesquisaSelecionada=" + document.getElementById("dropdownMenuButton").textContent;

    zerarCorpoGroup("groupPesquisasViagens");
    zerarCorpoTabela("tabelaMoradores");
    zerarCorpoTabela("viajens");

    organizaInputsPessoa(numeroSelecionado, parametros);


}

async function todasAsBuscas(qualquerBusca) {
    var retorno;
    await fetch(qualquerBusca).then((res) => res.json()).then((resJson) => {
        retorno = resJson;
    });
    return retorno;
}

async function organizaInputsPessoa(numeroSelecionado, parametros) {
    var urlJson = await todasAsBuscas("./urlsJSON.json");

    var url = urlJson.exportar.apidados + "?acao=buscaDadosPesquisas" + parametros;
    console.log(url);
    await fetch(url).then((r) => r.json()).then((rj) => {
        console.log(rj);



        document.getElementById("recId").value = rj[0].id;
        var recNumeroPessoa = document.getElementById("recNumeroPessoa").value = rj[0].numeroPessoa;
        var recNome = document.getElementById("recNome").value = rj[0].nome;
        var recSituacao = document.getElementById("recSituacao").value = rj[0].situacaoFamiliar;
        var recSexo = document.getElementById("recSexo").value = rj[0].sexo;
        var recIdade = document.getElementById("recIdade").value = rj[0].idade;
        var recInstrucao = document.getElementById("recInstrucao").value = rj[0].grau;
        var recAtividade = document.getElementById("recAtividade").value = rj[0].setor;
        var recSetorAtividade = document.getElementById("recSetorAtividade").value = rj[0].setorAtividade;
        var recRenda = document.getElementById("recRenda").value = rj[0].renda;
        var recViajens = document.getElementById("recViagens").value = rj[0].viajens;

    });

    organizaGroupViagens();
}

function organiInputsCasa(dados) {
    var recLatitude = document.getElementById("recLatitude").value = dados[0].latitude;
    var recLongitude = document.getElementById("recLongitude").value = dados[0].longitude;
    var recZona = document.getElementById("recZona").value = dados[0].zona;
    var recFolha = document.getElementById("recFolha").value = dados[0].folha;
    var recPontos = document.getElementById("recPontos").value = dados[0].pontos;
}

async function organizaGroupViagens() {
    var urlJson = await todasAsBuscas("./urlsJSON.json");
    var valorElementoSelecionadoPesquisa = document.getElementById("dropdownMenuButton").textContent;
    var valorElementoSelecionadoPessoa = document.getElementById("dropdownMenuButtonPessoa").textContent;
    var parametroBusca = "&idCasa=" + valorElementoSelecionadoPesquisa + "&numPessoa=" + valorElementoSelecionadoPessoa;

    var url = urlJson.exportar.apidados + "?acao=buscarPesquisaSelecionadaViajens" + parametroBusca;
    console.log(url);
    var dadosSelecao = await todasAsBuscas(url);
    var corpoGrupoVigens = document.getElementById("groupPesquisasViagens");
    var listaCabecalho = document.createElement("ul");

    for (var i = 0, max = dadosSelecao.length; i < max; i++) {
        var aPesquisa = document.createElement("li");
        aPesquisa.id = i + "groupPesquisasViagens";
        aPesquisa.className = "dropdown-item";
        aPesquisa.setAttribute("onclick", "viagemEscolhida(this.id)");
        aPesquisa.textContent = dadosSelecao[i].numeroViagem;
        listaCabecalho.appendChild(aPesquisa);
        corpoGrupoVigens.appendChild(listaCabecalho);
    }
}

function viagemEscolhida(id) {
    var elementoSelecionado = document.getElementById(id);
    var valorElementoSelecionado = elementoSelecionado.textContent;
    document.getElementById("dropdownMenuButtonViagem").textContent = valorElementoSelecionado;
    var valorNumViagem = document.getElementById("dropdownMenuButtonViagem").textContent;
    organizaImputsViagem(valorNumViagem);
}

async function organizaImputsViagem(valorNumViagem) {
    var urlJson = await todasAsBuscas("./urlsJSON.json");
    var idCasa = document.getElementById("dropdownMenuButton").textContent;
    var numeroPessoa = document.getElementById("dropdownMenuButtonPessoa").textContent;
    var parametros = "&idCasa=" + idCasa + "&numeroViagem=" + valorNumViagem + "&numeroPessoa=" + numeroPessoa;
    var url = urlJson.exportar.apidados + "?acao=buscaDadosViagens" + parametros;
    console.log(url);
    var dadosSelecao = await todasAsBuscas(url);





    var recIdViagens = document.getElementById("recIdViagens").value = dadosSelecao[0].id;
    var recNuPessoas = document.getElementById("recNuPessoas").value = dadosSelecao[0].numeroPessoa;
    var recVresidencia = document.getElementById("recVresidencia").value = dadosSelecao[0].viajensResidencia;
    var recLocal = document.getElementById("recLocal").value = dadosSelecao[0].local;
    var recSaida = document.getElementById("recSaida").value = dadosSelecao[0].hora;
    var recDestino = document.getElementById("recDestino").value = dadosSelecao[0].destino;
    var recDestZona = document.getElementById("recDestZona").value = dadosSelecao[0].zona;
    var recMot = document.getElementById("recMot").value = dadosSelecao[0].mot;
    var recModo = document.getElementById("recModo").value = dadosSelecao[0].value;
    var recModo1 = document.getElementById("recModo1").value = dadosSelecao[0].value1;
    var recModo2 = document.getElementById("recModo2").value = dadosSelecao[0].value2;
    var recCont = document.getElementById("recCont").value = dadosSelecao[0].cont;
    var recNumViagem = document.getElementById("recNumViagem").value = dadosSelecao[0].numeroViagem;
}

async function preencheDadosPessoaTabela() {

    if ((document.getElementById("dropdownMenuButtonPessoa").textContent).trim() !== "Seleciona Número Pessoa".trim()) {

        zerarCorpoTabela("tabelaMoradores");
        var recId = document.getElementById("recId").value;
        var recNumeroPessoa = document.getElementById("recNumeroPessoa").value;
        var recNome = document.getElementById("recNome").value;
        var recSituacao = document.getElementById("recSituacao").value;
        var recSexo = document.getElementById("recSexo").value;
        var recIdade = document.getElementById("recIdade").value;
        var recInstrucao = document.getElementById("recInstrucao").value;
        var recAtividade = document.getElementById("recAtividade").value;
        var recSetorAtividade = document.getElementById("recSetorAtividade").value;
        var recRenda = document.getElementById("recRenda").value;
        var recViajens = document.getElementById("recViagens").value;


        var recZona = document.getElementById("recZona").value;
        var recFolha = document.getElementById("recFolha").value;
        var idCasa = "&id_casa=" + recZona + recFolha;

        var NumeroPessoa = "&NumeroPessoa=" + recNumeroPessoa;
        var Nome = "&Nome=" + recNome;
        var Situacao = "&Situacao=" + recSituacao;
        var Sexo = "&Sexo=" + recSexo;
        var Idade = "&Idade=" + recIdade;
        var Instrucao = "&Instrucao=" + recInstrucao;
        var Atividade = "&Atividade=" + recAtividade;
        var setorAtividade = "&setorAtividade=" + recSetorAtividade;
        var Renda = "&Renda=" + recRenda;
        var Viajens = "&Viajens=" + recViajens;
        var IdViagens = "&idViagens=" + recId;

        var urlJson = await todasAsBuscas("./urlsJSON.json");
        console.log(urlJson);
        var url = urlJson.exportar.apidados + "?acao=atualizaCadCasaMoradores"
                + NumeroPessoa
                + Nome
                + Situacao
                + Sexo
                + Idade
                + Instrucao
                + Atividade
                + Renda
                + Viajens
                + IdViagens
                + idCasa
                + setorAtividade;

        console.log(url);

        await fetch(url).then((r) => r.json()).then((rj) => {
            var corpoDaTabela = document.querySelector("tbody");
            var tr = document.createElement("tr");
            var NumeroPessoa = document.createElement("td");
            var Nome = document.createElement("td");
            var Situacao = document.createElement("td");
            var Sexo = document.createElement("td");
            var Idade = document.createElement("td");
            var Instrucao = document.createElement("td");
            var Atividade = document.createElement("td");
            var setorAtividade = document.createElement("td");
            var Renda = document.createElement("td");
            var Viajens = document.createElement("td");
            var IdPesquisa = document.createElement("td");
            var Id = document.createElement("td");

            rj.forEach(element => {
                IdPesquisa = element.idCasa;
                Id.textContent = element.id;
                NumeroPessoa.textContent = element.numeroPessoa;
                Nome.textContent = element.nome;
                Situacao.textContent = element.situacaoFamiliar;
                Sexo.textContent = element.sexo;
                Idade.textContent = element.idade;
                Instrucao.textContent = element.grau;
                Atividade.textContent = element.setor;
                setorAtividade.textContent = element.setorAtividade;
                Renda.textContent = element.renda;
                Viajens.textContent = element.viajens;

                tr.appendChild(Id);
                tr.appendChild(NumeroPessoa);
                tr.appendChild(Nome);
                tr.appendChild(Situacao);
                tr.appendChild(Sexo);
                tr.appendChild(Idade);
                tr.appendChild(Instrucao);
                tr.appendChild(Atividade);
                tr.appendChild(setorAtividade);
                tr.appendChild(Renda);
                tr.appendChild(Viajens);

                corpoDaTabela.appendChild(tr);
            });


        });
        limparCamposPessoas();
    } else {
        alert("Favor Selecionar Pelo menos uma pessoa");
    }
}

async function preencheDadosViagensTabela() {
    zerarCorpoTabela("viajens");
    var id = document.getElementById("recZona").value
            + document.getElementById("recFolha").value;
    var recNuPessoas = document.getElementById("recNuPessoas").value;
    var recVresidencia = document.getElementById("recVresidencia").value;
    var recLocal = document.getElementById("recLocal").value;
    var recSaida = document.getElementById("recSaida").value;
    var recDestino = document.getElementById("recDestino").value;
    var recDestZona = document.getElementById("recDestZona").value;
    var recMot = document.getElementById("recMot").value;
    var recModo = document.getElementById("recModo").value;
    var recModo1 = document.getElementById("recModo1").value;
    var recModo2 = document.getElementById("recModo2").value;
    var recCont = document.getElementById("recCont").value;
    var recIdViagens = document.getElementById("recIdViagens").value;
    var recNumViagens = document.getElementById("recNumViagem").value;

    var parametros = "&id_casa=" + id
            + "&recNuPessoas=" + recNuPessoas
            + "&recVresidencia=" + recVresidencia
            + "&recLocal=" + recLocal
            + "&recSaida=" + recSaida
            + "&recDestino=" + recDestino
            + "&recDestZona=" + recDestZona
            + "&recMot=" + recMot
            + "&recModo=" + recModo
            + "&recModo1=" + recModo1
            + "&recModo2=" + recModo2
            + "&recCont=" + recCont
            + "&recIdViagens=" + recIdViagens
            + "&numeroViagem=" + recNumViagens
            ;

    var urlJson;
    await fetch("urlsJSON.json").then((r) => r.json()).then((rj) => {
        urlJson = rj;
    });
    var url = urlJson.exportar.apidados + "?acao=atualizaCadViagens" + parametros;

    console.log(url);
    await fetch(url).then((r) => r.json()).then((rj) => {
        var corpoDaTabela = document.getElementById("viajens");
        var tr = document.createElement("tr");
        var recNuPessoa = document.createElement("td");
        var id = document.createElement("td");
        var recVresidencia = document.createElement("td");
        var recLocal = document.createElement("td");
        var recSaida = document.createElement("td");
        var recDestino = document.createElement("td");
        var recDestinoZona = document.createElement("td");
        var recMot = document.createElement("td");
        var recModo = document.createElement("td");
        var recModo1 = document.createElement("td");
        var recModo2 = document.createElement("td");
        var recCont = document.createElement("td");
        var recNumViagens = document.createElement("td");
        rj.forEach(element => {
            id.textContent = element.id;
            recNuPessoa.textContent = element.numeroPessoa;
            recVresidencia.textContent = element.viajensResidencia;
            recLocal.textContent = element.local;
            recSaida.textContent = element.hora;
            recDestino.textContent = element.destino;
            recDestinoZona.textContent = element.zona;
            recMot.textContent = element.mot;
            recCont.textContent = element.cont;
            recModo.textContent = element.hora;
            recModo1.textContent = element.value1;
            recModo2.textContent = element.value2;
            recNumViagens.textContent = element.numeroViagem;

            tr.appendChild(id);
            tr.appendChild(recNumViagens);
            tr.appendChild(recNuPessoa);
            tr.appendChild(recVresidencia);
            tr.appendChild(recLocal);
            tr.appendChild(recSaida);
            tr.appendChild(recDestino);
            tr.appendChild(recDestinoZona);
            tr.appendChild(recMot);
            tr.appendChild(recModo);
            tr.appendChild(recModo1);
            tr.appendChild(recModo2);
            tr.appendChild(recCont);

            corpoDaTabela.appendChild(tr);
        });
    });
    limparCamposViagens();
}

async function atualizaDadosPesquisa() {
    var recLatitude = document.getElementById("recLatitude").value;
    var recLongitude = document.getElementById("recLongitude").value;
    var recZona = document.getElementById("recZona").value;
    var recFolha = document.getElementById("recFolha").value;
    var recPontos = document.getElementById("recPontos").value;


    var id = "&id_casa=" + recZona + recFolha;
    var latitude = "&latitude=" + recLatitude;
    var longitude = "&longitude=" + recLongitude;
    var zona = "&zona=" + recZona;
    var folha = "&folha=" + recFolha;
    var pontos = "&ponto=" + recPontos;

    var urlJson = await todasAsBuscas("./urlsJSON.json");
    console.log(urlJson);
    var url = urlJson.exportar.apidados + "?acao=atualizaCadCasa"
            + id
            + latitude
            + longitude
            + zona
            + folha
            + pontos;

    await fetch(url);

    alert("Pesquisa Atualizada");
}

function limparCamposPessoas() {
    document.getElementById("recNumeroPessoa").value = "";
    document.getElementById("recNome").value = "";
    document.getElementById("recSituacao").value = "";
    document.getElementById("recSexo").value = "";
    document.getElementById("recIdade").value = "";
    document.getElementById("recInstrucao").value = "";
    document.getElementById("recAtividade").value = "";
    document.getElementById("recRenda").value = "";
    document.getElementById("recViagens").value = "";
    document.getElementById("recSetorAtividade").value = "";
    document.getElementById("recNumeroPessoa").focus();
}

function limparCamposViagens() {
    document.getElementById("recNuPessoas").value = "";
    document.getElementById("recVresidencia").value = "";
    document.getElementById("recLocal").value = "";
    document.getElementById("recSaida").value = "";
    document.getElementById("recDestino").value = "";
    document.getElementById("recDestZona").value = "";
    document.getElementById("recMot").value = "";
    document.getElementById("recModo").value = "";
    document.getElementById("recModo1").value = "";
    document.getElementById("recModo2").value = "";
    document.getElementById("recCont").value = "";
    document.getElementById("recNumViagem").value = "";
    document.getElementById("recIdViagens").value = "";
    document.getElementById("recNumViagem").focus();
}

async function deletarPesquisa() {
    var selecao = document.getElementById("dropdownMenuButton").textContent;
    if (selecao.trim() !== "Seleciona Pesquisa") {
        var urlJson = await todasAsBuscas("./urlsJSON.json");
        var parametroDelete = "&deletandoTudo=" + selecao;
        url = urlJson.exportar.apidados + "?acao=deletarTudo" + parametroDelete;
        await fetch(url);
        alert("Pesquisa Completa Deletada");
        window.location.reload();
    } else {
        alert("Selecionar Pesquisa");
    }



}

function pesquisandoManual() {
    var pesquisaZonaManual = document.getElementById("pesquisaZona").value;
    var pesquisaFolhaManual = document.getElementById("pesquisaFolha").value;
    zerarCorpoGroup("groupPesquisasPessoa");
    zerarCorpoGroup("groupPesquisasViagens");
    zerarCorpoTabela("tabelaMoradores");
    zerarCorpoTabela("viajens");
    limparCamposPessoas();
    limparCamposViagens();
    execultandoPesquisaManual(pesquisaZonaManual + pesquisaFolhaManual);
}

async function execultandoPesquisaManual(zonaEfolha) {
    document.getElementById("pesquisaZona").value = "";
    document.getElementById("pesquisaFolha").value = "";
    document.getElementById("dropdownMenuButton").textContent = zonaEfolha;
    var urlJson = await todasAsBuscas("./urlsJSON.json");
    var parametroBusca = "&idCasa=" + zonaEfolha;
    url = urlJson.exportar.apidados + "?acao=buscarPesquisaSelecionadaMoradores" + parametroBusca;
    var dadosPesquisaSelecionadaMoradores = await todasAsBuscas(url);
    url = urlJson.exportar.apidados + "?acao=buscarPesquisaSelecionadaCasa" + parametroBusca;
    var dadosPesquisaSelecionadaCasa = await todasAsBuscas(url);
    organiInputsCasa(dadosPesquisaSelecionadaCasa);
    organizaGroupPessoas(dadosPesquisaSelecionadaMoradores);
}

function zerarCorpoTabela(id) {
    var corpoDaTabela = document.getElementById(id).querySelector("tr");
    if (corpoDaTabela !== null) {
        corpoDaTabela.parentNode.removeChild(corpoDaTabela);
    }
}

function zerarCorpoGroup(id) {
    var corpoGrupo = document.getElementById(id);
    var elementoGroup = corpoGrupo.querySelector("ul");
    console.log(elementoGroup === null);

    if (elementoGroup !== null) {
        elementoGroup.parentNode.removeChild(elementoGroup);
    }
    console.log(elementoGroup);
}
