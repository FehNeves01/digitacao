/* global fetch */

//Todas as Buscas
var dados;
var dadosMoradores;
var dadosViagens;
var urlJson;
async function todasAsBuscas(qualquerBusca) {
    var retorno;
    await fetch(qualquerBusca).then((res) => res.json()).then((resJson) => {
        retorno = resJson;
    });
    return retorno;
}


async function pesquisandoManual() {
    var pesquisaZonaManual = document.getElementById("pesquisaZona").value;
    var pesquisaFolhaManual = document.getElementById("pesquisaFolha").value;
    urlJson = await todasAsBuscas("./urlsJSON.json");
    var idPesquisa = (pesquisaZonaManual + pesquisaFolhaManual);
    var url = urlJson.exportar.apidados + "?acao=buscarPesquisaSelecionadaCasa" + "&idCasa=" + idPesquisa;
    console.log(url);
    dados = await todasAsBuscas(url);


    url = urlJson.exportar.apidados + "?acao=buscarPesquisaSelecionadaMoradores" + "&idCasa=" + idPesquisa;
    console.log(url);
    dadosMoradores = await todasAsBuscas(url);
    url = urlJson.exportar.apidados + "?acao=buscarPesquisaSelecionadaViajensTodas" + "&idCasa=" + idPesquisa;
    console.log(url);
    dadosViagens = await todasAsBuscas(url);


    console.log(dados);
    console.log(dadosMoradores);
    console.log(dadosViagens);

//    var corpoTabelaCasa = document.getElementById("tabelaPesquisa");
//    if (corpoTabelaCasa.parentNode !== null) {
//        corpoTabelaCasa.parentNode.removeChild(corpoTabelaCasa);
//    }
//    var tableCasa = document.getElementById("tableCasa");
//    var tbodyTableCasa = document.createElement("tbody");
//    tbodyTableCasa.id = "tabelaPesquisa";
//    tableCasa.appendChild(tbodyTableCasa);
//    
    var corpoDaTabelaMoradores = document.getElementById("corpoTabelaMoradores");
    if (corpoDaTabelaMoradores.parentNode) {
        corpoDaTabelaMoradores.parentNode.removeChild(corpoDaTabelaMoradores);
    }
    var tabelaMoradores = document.getElementById("tabelaMoradores");
    var tbodyTabelaMoradores = document.createElement("tbody");
    tbodyTabelaMoradores.id = "corpoTabelaMoradores";
    tabelaMoradores.appendChild(tbodyTabelaMoradores);

    var coporDaTabelaViajens = document.getElementById("viajens");
    if (coporDaTabelaViajens.parentNode) {
        coporDaTabelaViajens.parentNode.removeChild(coporDaTabelaViajens);
    }
    var tabelaViagens = document.getElementById("tabelaViagens");
    
    var tbodyTabelaViagens = document.createElement("tbody");
    tbodyTabelaViagens.id = "viajens";
    tabelaViagens.appendChild(tbodyTabelaViagens);

    




    povoarTabelaPesquisa();
    povoarTabelaMoradores();
    povoarTabelaViagens();
}

function povoarTabelaPesquisa() {


    var corpoDaTabela = document.getElementById("tabelaPesquisa");

    for (var i = 0; i < dados.length; i++) {
        var tr = document.createElement("tr");

        var id = document.createElement("td");
        var latitude = document.createElement("td");
        var longitude = document.createElement("td");
        var zona = document.createElement("td");
        var folha = document.createElement("td");
        var pontos = document.createElement("td");

        id.textContent = dados[i].id;
        latitude.textContent = dados[i].latitude;
        longitude.textContent = dados[i].longitude;
        zona.textContent = dados[i].zona;
        folha.textContent = dados[i].folha;
        pontos.textContent = dados[i].pontos;

        tr.appendChild(id);
        tr.appendChild(latitude);
        tr.appendChild(longitude);
        tr.appendChild(zona);
        tr.appendChild(folha);
        tr.appendChild(pontos);
        corpoDaTabela.appendChild(tr);
    }
}

async function povoarTabelaMoradores() {

    var corpoDaTabela2 = document.getElementById("tabelaMoradores");
    await dadosMoradores.forEach(key => {
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

        Id.textContent = key.id;
        NumeroPessoa.textContent = key.numeroPessoa;
        Nome.textContent = key.nome;
        Situacao.textContent = key.situacaoFamiliar;
        Sexo.textContent = key.sexo;
        Idade.textContent = key.idade;
        Instrucao.textContent = key.grau;
        Atividade.textContent = key.setor;
        setorAtividade.textContent = key.setorAtividade;
        Renda.textContent = key.renda;
        Viajens.textContent = key.viajens;

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


        corpoDaTabela2.appendChild(tr);
    });
}
async function povoarTabelaViagens() {
    var corpoDaTabela3 = document.getElementById("viajens");
    await dadosViagens.forEach(key => {

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


        id.textContent = key.id;
        recNuPessoa.textContent = key.numeroPessoa;
        recVresidencia.textContent = key.viajensResidencia;
        recLocal.textContent = key.local;
        recSaida.textContent = key.hora;
        recDestino.textContent = key.destino;
        recDestinoZona.textContent = key.zona;
        recMot.textContent = key.mot;
        recCont.textContent = key.cont;
        recModo.textContent = key.value;
        recModo1.textContent = key.value1;
        recModo2.textContent = key.value2;


        tr.appendChild(id);
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

        corpoDaTabela3.appendChild(tr);
    });


}
