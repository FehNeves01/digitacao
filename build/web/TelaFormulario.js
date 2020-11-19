async function buscarTodas(qualquerBusca) {
    var retorno;
    await fetch(qualquerBusca).then((res) => res.json()).then((resJson) => {
        retorno = resJson;
    });
    return retorno;
}
async function controlandoPagina() {

    var parametros = pegandoParametros();
    await preparandoURLeFazendoRequisicao(parametros);
    zerarInputs()

    // buscarDadosPlanilha()
    window.location.reload(true);
}
function btnExcluir(){
    trabalhandoComArquivoJSON();
}
/*Excluir */
async function trabalhandoComArquivoJSON() {
    var urlJson = await buscarTodas("./urlsJSON.json");
    var dadosExcel = await buscarTodas("./DADOS.json");
    var url = urlJson.exportar.apiformulario + "?acao=cadastraFormulario"
    console.log(dadosExcel);
    dadosExcel.forEach(async(key) => {

        var recMacroZona = key.A;
        var recZona = key.B;
        var recPopulacao = key.C;
        var recNumDomicilio = key.D;
        var recHabDomicilio = key.E;
        var recPopLevantamentoRendaPico = key.F;
        var recDezAnosMeioSalario = key.G;
        var recDezAnosMeioSalarioAum = key.H;
        var recDezAnosUmAdois = key.I;
        var recDezAnosDoisAtres = key.J;
        var recDezAnosTresAcinco = key.K;
        var recDezAnosCincoAdez = key.L;
        var recDezAnosDezAquinze = key.M;
        var recDezAnosQuinzeAvinte = key.N;
        var recDezAnos = key.O;
        var recDezAnosSemRedimento = key.P;
        var recDezAnosComRendimentoESemRedimento = key.Q;
        var recMenoresDezAnos = key.R;
        var recCensitarios =key.S;
        var recCidade = "JAU";


        var parametros =
            "&macroZonaDireto=" + recMacroZona
            + "&zona=" + recZona
            + "&populacao=" + recPopulacao
            + "&numDomicilio=" + recNumDomicilio
            + "&habDomicilio=" + recHabDomicilio
            + "&popLevantamentoRendaPico=" + recPopLevantamentoRendaPico
            + "&meioSalario=" + recDezAnosMeioSalario
            + "&meioEum=" + recDezAnosMeioSalarioAum
            + "&umAdois=" + recDezAnosUmAdois
            + "&doisAtres=" + recDezAnosDoisAtres
            + "&tresAcinco=" + recDezAnosTresAcinco
            + "&cincoAdez=" + recDezAnosCincoAdez
            + "&dezAquinze=" + recDezAnosDezAquinze
            + "&quinzeAvinte=" + recDezAnosQuinzeAvinte
            + "&dezAnos=" + recDezAnos
            + "&semRedimento=" + recDezAnosSemRedimento
            + "&comRedimento=" + recDezAnosComRendimentoESemRedimento
            + "&menoresDezAnos=" + recMenoresDezAnos
            + "&censitarios=" + recCensitarios
            + "&cidade=" + recCidade
            ;
            console.log(url+parametros);
            await fetch(url+parametros).then(rs=>console.log(rs.url));
    });
}


/** Configuracao de funcionalidade da Tela */
async function primeiraAcaoDaTela() {
    

    var urlJson = await buscarTodas("./urlsJSON.json");
    console.log(urlJson.exportar.apiformulario)

    var url = urlJson.exportar.apiformulario + "?acao=buscaFormularios"
    console.log(url);
    var dados = await buscarTodas(url);


    preencherTabela(dados);
}

function preencherTabela(dados) {
    var corpoDaTabela = document.getElementById("corpoTabela");
    console.log(dados);
    dados.forEach(element => {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");
        var td6 = document.createElement("td");
        var td7 = document.createElement("td");
        var td8 = document.createElement("td");
        var td9 = document.createElement("td");
        var td10 = document.createElement("td");
        var td11 = document.createElement("td");
        var td12 = document.createElement("td");
        var td13 = document.createElement("td");
        var td14 = document.createElement("td");
        var td15 = document.createElement("td");
        var td16 = document.createElement("td");
        var td17 = document.createElement("td");
        var td18 = document.createElement("td");
        var td19 = document.createElement("td");
        var td20 = document.createElement("td");
        var td21 = document.createElement("td");
        var td22 = document.createElement("td");


        td1.textContent = element.id;
        td2.textContent = element.macroZonaDiretor;
        td3.textContent = element.zona;
        td4.textContent = element.populacaoIbge;
        td5.textContent = element.numIBGE;
        td6.textContent = element.habitacaoDomicilio;
        td7.textContent = element.levantamentoRendaPico;
        td8.textContent = element.meioSalario;
        td9.textContent = element.meioSalarioAum;
        td10.textContent = element.umSalarioAdois;
        td11.textContent = element.doisSalarioAtres;
        td12.textContent = element.tresSalarioAcinco;
        td13.textContent = element.cincoSalarioAdez;
        td14.textContent = element.dezSalarioAquinze;
        td15.textContent = element.quinzeSalarioAvinte;
        td16.textContent = element.dezAnos;
        td17.textContent = element.semRedimento;
        td18.textContent = element.comRedimento;
        td19.textContent = element.menoresDezAnos;
        td20.textContent = element.censitarios;
        td21.textContent = element.ano;
        td22.textContent = element.cidade;


        tr.appendChild(td1);
        tr.appendChild(td21);
        tr.appendChild(td22);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(td8);
        tr.appendChild(td9);
        tr.appendChild(td10);
        tr.appendChild(td11);
        tr.appendChild(td12);
        tr.appendChild(td13);
        tr.appendChild(td14);
        tr.appendChild(td15);
        tr.appendChild(td16);
        tr.appendChild(td17);
        tr.appendChild(td18);
        tr.appendChild(td19);
        tr.appendChild(td20);

        corpoDaTabela.appendChild(tr);
    });


}
async function preparandoURLeFazendoRequisicao(parametros) {
    var urlJson = await buscarTodas("./urlsJSON.json");
    console.log(urlJson.exportar.apiformulario)

    var url = urlJson.exportar.apiformulario + "?acao=cadastraFormulario" + parametros
    console.log(url);
    await fetch(url);
}
function pegandoParametros() {
    var recMacroZona = $('#recMacroZonaDiretor').val();
    var recZona = $('#recZona').val();
    var recPopulacao = $('#recPopulacaoIbge').val();
    var recNumDomicilio = $('#recNumDomicilio').val();
    var recHabDomicilio = $('#recHabDomicilio').val();
    var recPopLevantamentoRendaPico = $('#recPopLevantamentoRendaPico').val();
    var recDezAnosMeioSalario = $('#recDezAnosMeioSalario').val();
    var recDezAnosMeioSalarioAum = $('#recDezAnosMeioSalarioAum').val();
    var recDezAnosUmAdois = $('#recDezAnosUmAdois').val();
    var recDezAnosDoisAtres = $('#recDezAnosDoisAtres').val();
    var recDezAnosTresAcinco = $('#recDezAnosTresAcinco').val();
    var recDezAnosCincoAdez = $('#recDezAnosCincoAdez').val();
    var recDezAnosDezAquinze = $('#recDezAnosDezAquinze').val();
    var recDezAnosQuinzeAvinte = $('#recDezAnosQuinzeAvinte').val();
    var recDezAnos = $('#recDezAnos').val();
    var recDezAnosSemRedimento = $('#recDezAnosSemRedimento').val();
    var recDezAnosComRendimentoESemRedimento = $('#recDezAnosComRendimentoESemRedimento').val();
    var recMenoresDezAnos = $('#recMenoresDezAnos').val();
    var recCensitarios = $('#recCensitarios').val();
    var recCidade = $('#recCidade').val();


    var parametros =
        "&macroZonaDireto=" + recMacroZona
        + "&zona=" + recZona
        + "&populacao=" + recPopulacao
        + "&numDomicilio=" + recNumDomicilio
        + "&habDomicilio=" + recHabDomicilio
        + "&popLevantamentoRendaPico=" + recPopLevantamentoRendaPico
        + "&meioSalario=" + recDezAnosMeioSalario
        + "&meioEum=" + recDezAnosMeioSalarioAum
        + "&umAdois=" + recDezAnosUmAdois
        + "&doisAtres=" + recDezAnosDoisAtres
        + "&tresAcinco=" + recDezAnosTresAcinco
        + "&cincoAdez=" + recDezAnosCincoAdez
        + "&dezAquinze=" + recDezAnosDezAquinze
        + "&quinzeAvinte=" + recDezAnosQuinzeAvinte
        + "&dezAnos=" + recDezAnos
        + "&semRedimento=" + recDezAnosSemRedimento
        + "&comRedimento=" + recDezAnosComRendimentoESemRedimento
        + "&menoresDezAnos=" + recMenoresDezAnos
        + "&censitarios=" + recCensitarios
        + "&cidade=" + recCidade
        ;

    return parametros;
}
function zerarInputs() {
    $('#recMacroZonaDiretor').val("");
    $('#recZona').val("");
    $('#recPopulacaoIbge').val("");
    $('#recNumDomicilio').val("");
    $('#recHabDomicilio').val("");
    $('#recPopLevantamentoRendaPico').val("");
    $('#recDezAnosMeioSalario').val("");
    $('#recDezAnosMeioSalarioAum').val("");
    $('#recDezAnosUmAdois').val("");
    $('#recDezAnosDoisAtres').val("");
    $('#recDezAnosTresAcinco').val("");
    $('#recDezAnosCincoAdez').val("");
    $('#recDezAnosDezAquinze').val("");
    $('#recDezAnosQuinzeAvinte').val("");
    $('#recDezAnos').val("");
    $('#recDezAnosSemRedimento').val("");
    $('#recDezAnosComRendimentoESemRedimento').val("");
    $('#recMenoresDezAnos').val("");
    $('#recCensitarios').val("");
    $('#recCidade').val("");
}


$('#recMacroZonaDiretor').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recZona').focus();
    }
});
$('#recZona').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recPopulacaoIbge').focus();
    }
});
$('#recPopulacaoIbge').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recNumDomicilio').focus();
    }
});
$('#recNumDomicilio').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recHabDomicilio').focus();
    }
});
$('#recHabDomicilio').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recPopLevantamentoRendaPico').focus();
    }
});
$('#recPopLevantamentoRendaPico').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recDezAnosMeioSalario').focus();
    }
});
$('#recDezAnosMeioSalario').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recDezAnosMeioSalarioAum').focus();
    }
});
$('#recDezAnosMeioSalarioAum').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recDezAnosUmAdois').focus();
    }
});
$('#recDezAnosUmAdois').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recDezAnosDoisAtres').focus();
    }
});
$('#recDezAnosDoisAtres').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recDezAnosTresAcinco').focus();
    }
});
$('#recDezAnosTresAcinco').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recDezAnosCincoAdez').focus();
    }
});
$('#recDezAnosCincoAdez').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recDezAnosDezAquinze').focus();
    }
});
$('#recDezAnosDezAquinze').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recDezAnosQuinzeAvinte').focus();
    }
});
$('#recDezAnosQuinzeAvinte').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recDezAnos').focus();
    }
});
$('#recDezAnos').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recDezAnosSemRedimento').focus();
    }
});
$('#recDezAnosSemRedimento').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recDezAnosComRendimentoESemRedimento').focus();
    }
});
$('#recDezAnosComRendimentoESemRedimento').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recMenoresDezAnos').focus();
    }
});
$('#recMenoresDezAnos').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recCensitarios').focus();
    }
});
$('#recCensitarios').keyup((e) => {
    if (e.keyCode === 13) {
        $('#btnPessoa').focus();
    }
});
