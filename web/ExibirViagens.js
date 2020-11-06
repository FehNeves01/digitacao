/* global fetch */

var dados;
async function buscaPesquisas() {
    var urlJson = await todasAsBuscas("./urlsJSON.json");
    var url = urlJson.exportar.apidados + "?acao=buscaDadosViagensBanco";
    console.log(url);
    dados = await todasAsBuscas(url);
    preencheTabela();
}
async function todasAsBuscas(qualquerBusca) {
    var retorno;
    await fetch(qualquerBusca).then((res) => res.json()).then((resJson) => {
        retorno = resJson;
    });
    return retorno;
}


function preencheTabela() {
    var corpoDaTabela = document.getElementById("viajens");
    dados.forEach(key => {
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
        var digitador = document.createElement("td");

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
        digitador.textContent = key.digitador;


        tr.appendChild(id);
        tr.appendChild(digitador);
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
    
    var quantidadeDados = dados.length;
    
    document.getElementById("totalRegistros").textContent = quantidadeDados;

}