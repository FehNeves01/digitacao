var dados;
async function buscaPesquisas() {
    var urlJson = await todasAsBuscas("./urlsJSON.json");
    var url = urlJson.exportar.apidados + "?acao=buscaDadosMoradores";
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
    var corpoDaTabela = document.getElementById("tabelaMoradores");
    dados.forEach(key => {
        var tr = document.createElement("tr");
        var NumeroPessoa = document.createElement("td");
        var Nome = document.createElement("td");
        var Situacao = document.createElement("td");
        var Sexo = document.createElement("td");
        var Idade = document.createElement("td");
        var Instrucao = document.createElement("td");
        var Atividade = document.createElement("td");
        var Renda = document.createElement("td");
        var Viajens = document.createElement("td");
        var IdPesquisa = document.createElement("td");
        var Id = document.createElement("td");
        var digitador = document.createElement("td");

        Id.textContent = key.id;
        NumeroPessoa.textContent = key.numeroPessoa;
        Nome.textContent = key.nome;
        Situacao.textContent = key.situacaoFamiliar;
        Sexo.textContent = key.sexo;
        Idade.textContent = key.idade;
        Instrucao.textContent = key.grau;
        Atividade.textContent = key.setor;
        Renda.textContent = key.renda;
        Viajens.textContent = key.viajens;
        digitador.textContent = key.digitador;

        tr.appendChild(Id);
        tr.appendChild(digitador);
        tr.appendChild(NumeroPessoa);
        tr.appendChild(Nome);
        tr.appendChild(Situacao);
        tr.appendChild(Sexo);
        tr.appendChild(Idade);
        tr.appendChild(Instrucao);
        tr.appendChild(Atividade);
        tr.appendChild(Renda);
        tr.appendChild(Viajens);


        corpoDaTabela.appendChild(tr);
    });
    
    var quantidadeDados = dados.length;
    
    document.getElementById("totalRegistros").textContent = quantidadeDados;


}