async function buscarTodas(qualquerBusca){
    var retorno;
    await fetch(qualquerBusca).then((res) => res.json()).then((resJson) => {
        retorno = resJson;
    });
    return retorno;
}
async function salvarPesquisa() {
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
    var recDezAnosDezAquinze =$('#recDezAnosDezAquinze').val();
    var recDezAnosQuinzeAvinte =$('#recDezAnosQuinzeAvinte').val();
    var recDezAnos =$('#recDezAnos').val();
    var recDezAnosSemRedimento = $('#recDezAnosSemRedimento').val();
    var recDezAnosComRendimentoESemRedimento =$('#recDezAnosComRendimentoESemRedimento').val();
    var recMenoresDezAnos =$('#recMenoresDezAnos').val();
    var recCensitarios =$('#recCensitarios').val();
    

    var parametros =
        "&macroZonaDireto=" + recMacroZona 
    +   "&zona=" + recZona
    +   "&populacao="+ recPopulacao
    +   "&numDomicilio="+ recNumDomicilio
    +   "&habDomicilio="+ recHabDomicilio
    +   "&popLevantamentoRendaPico="+ recPopLevantamentoRendaPico
    +   "&meioSalario=" + recDezAnosMeioSalario
    +   "&meioEum=" + recDezAnosMeioSalarioAum
    +   "&umAdois=" + recDezAnosUmAdois
    +   "&doisAtres=" + recDezAnosDoisAtres
    +   "&tresAcinco="+ recDezAnosTresAcinco
    +   "&cincoAdez="+ recDezAnosCincoAdez
    +   "&dezAquinze="+ recDezAnosDezAquinze
    +   "&quinzeAvinte="+ recDezAnosQuinzeAvinte
    +   "&dezAnos="+ recDezAnos
    +   "&semRedimento="+ recDezAnosSemRedimento
    +   "&comRedimento="+ recDezAnosComRendimentoESemRedimento
    +   "&menoresDezAnos="+ recMenoresDezAnos
    +   "&censitarios="+ recCensitarios
    ;
    
    var urlJson = await buscarTodas("./urlsJSON.json");
    console.log(urlJson.exportar.apiformulario)

    var url = urlJson.exportar.apiformulario + "?acao=cadastraFormulario" + parametros

    var cadastrado = await buscarTodas(url);
    console.log(cadastrado);
}


/** Configuracao de funcionalidade da Tela */
$('#recMacroZonaDiretor').keydown((e) => {
    if (e.keyCode === 13) {
        $('#recZona').focus();
    }
});
$('#recZona').keydown((e) => {
    if (e.keyCode === 13) {
        $('#recPopulacaoIbge').focus();
    }
});

$('#recPopulacaoIbge').keydown((e) => {
    if (e.keyCode === 13) {
        $('#recNumDomicilio').focus();
    }
});

$('#recNumDomicilio').keydown((e) => {
    if (e.keyCode === 13) {
        $('#recHabDomicilio').focus();
    }
});

$('#recHabDomicilio').keydown((e) => {
    if (e.keyCode === 13) {
        $('#recPopLevantamentoRendaPico').focus();
    }
});
$('#recPopLevantamentoRendaPico').keydown((e) => {
    if (e.keyCode === 13) {
        $('#recDezAnosMeioSalario').focus();
    }
});
$('#recDezAnosMeioSalario').keydown((e) => {
    if (e.keyCode === 13) {
        $('#recDezAnosMeioSalarioAum').focus();
    }
});
$('#recDezAnosMeioSalarioAum').keydown((e) => {
    if (e.keyCode === 13) {
        $('#recDezAnosUmAdois').focus();
    }
});
$('#recDezAnosUmAdois').keydown((e) => {
    if (e.keyCode === 13) {
        $('#recDezAnosDoisAtres').focus();
    }
});
$('#recDezAnosDoisAtres').keydown((e) => {
    if (e.keyCode === 13) {
        $('#recDezAnosTresAcinco').focus();
    }
});
$('#recDezAnosTresAcinco').keydown((e) => {
    if (e.keyCode === 13) {
        $('#recDezAnosCincoAdez').focus();
    }
});
$('#recDezAnosCincoAdez').keydown((e) => {
    if (e.keyCode === 13) {
        $('#recDezAnosDezAquinze').focus();
    }
});
$('#recDezAnosDezAquinze').keydown((e) => {
    if (e.keyCode === 13) {
        $('#recDezAnosQuinzeAvinte').focus();
    }
});
$('#recDezAnosQuinzeAvinte').keydown((e) => {
    if (e.keyCode === 13) {
        $('#recDezAnos').focus();
    }
});
$('#recDezAnos').keydown((e) => {
    if (e.keyCode === 13) {
        $('#recDezAnosSemRedimento').focus();
    }
});
$('#recDezAnosSemRedimento').keydown((e) => {
    if (e.keyCode === 13) {
        $('#recDezAnosComRendimentoESemRedimento').focus();
    }
});
$('#recDezAnosComRendimentoESemRedimento').keydown((e) => {
    if (e.keyCode === 13) {
        $('#recMenoresDezAnos').focus();
    }
});
$('#recMenoresDezAnos').keydown((e) => {
    if (e.keyCode === 13) {
        $('#recCensitarios').focus();
    }
});
$('#recCensitarios').keyup((e) => {
    if (e.keyCode === 13) {
        $('#btnPessoa').focus();
    }
});
