var dados;
async function buscaPesquisas() {
    var urlJson = await todasAsBuscas("./urlsJSON.json");
    var url = urlJson.exportar.apidados + "?acao=buscaDadosCasas";
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
    var corpoDaTabela = document.getElementById("tabelaPesquisa");
    dados.forEach(key => {
        var tr = document.createElement("tr");
        var id = document.createElement("td");
        var latitude = document.createElement("td");
        var longitude = document.createElement("td");
        var zona = document.createElement("td");
        var folha = document.createElement("td");
        var pontos = document.createElement("td");
        var digitador = document.createElement("td");
        
        id.textContent = key.id;
        latitude.textContent = key.latitude;
        longitude.textContent = key.longitude;
        zona.textContent = key.zona;
        folha.textContent = key.folha;
        pontos.textContent = key.pontos;
        digitador.textContent = key.digitador;

        tr.appendChild(id);
        tr.appendChild(digitador);
        tr.appendChild(latitude);
        tr.appendChild(longitude);
        tr.appendChild(zona);
        tr.appendChild(folha);
        tr.appendChild(pontos);
        

        corpoDaTabela.appendChild(tr);
    });

     var quantidadeDados = dados.length;
    
    document.getElementById("totalRegistros").textContent = quantidadeDados;

}