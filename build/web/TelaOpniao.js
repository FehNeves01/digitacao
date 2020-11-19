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
/** Configuracao de funcionalidade da Tela */
async function primeiraAcaoDaTela() {
    $('#recNumFormulario').focus();

    var urlJson = await buscarTodas("./urlsJSON.json");
    console.log(urlJson.exportar.apiopniao)

    var url = urlJson.exportar.apiopniao + "?acao=buscaOpniao"
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
        var td23 = document.createElement("td");
        var td24 = document.createElement("td");
        var td25 = document.createElement("td");
        var td26 = document.createElement("td");
        var td27 = document.createElement("td");

        td1.textContent = element.id;
        td2.textContent = element.numformulario;
        td3.textContent = element.data;
        td4.textContent = element.hora;
        td5.textContent = element.horaviagem;
        td6.textContent = element.linha;
        td7.textContent = element.um;
        td8.textContent = element.dois;
        td9.textContent = element.tres;
        td10.textContent = element.quatro;
        td11.textContent = element.cinco;
        td12.textContent = element.seis;
        td13.textContent = element.sete;
        td14.textContent = element.oito;
        td15.textContent = element.nove;
        td16.textContent = element.dez;
        td17.textContent = element.onze;
        td18.textContent = element.doze;
        td19.textContent = element.treze;
        td20.textContent = element.quatorze;
        td21.textContent = element.quinze;
        td22.textContent = element.dezesseis;
        td23.textContent = element.dezessete;
        td24.textContent = element.dezoito;
        td25.textContent = element.dezenove;
        td26.textContent = element.vinte;
        td27.textContent = element.vinteeum;


        tr.appendChild(td1);
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
        tr.appendChild(td21);
        tr.appendChild(td22);
        tr.appendChild(td23);
        tr.appendChild(td24);
        tr.appendChild(td25);
        tr.appendChild(td26);
        tr.appendChild(td27);
        corpoDaTabela.appendChild(tr);
    });


}
async function preparandoURLeFazendoRequisicao(parametros) {
    var urlJson = await buscarTodas("./urlsJSON.json");
    console.log(urlJson.exportar.apiopniao)

    var url = urlJson.exportar.apiopniao + "?acao=cadastraOpniao" + parametros
    console.log(url);
    await fetch(url);
}
function pegandoParametros() {
    var numFormulario = $('#recNumFormulario').val()
    var data = $('#recData').val()
    var horaEntr = $('#recHoraEntr').val()
    var horaViag = $('#recHoraViag').val()
    var linha = $('#recLinha').val()
    var um = $('#rec1').val();
    var dois = $('#rec2').val();
    var tres = $('#rec3').val();
    var quatro = $('#rec4').val();
    var cinco = $('#rec5').val();
    var seis = $('#rec6').val();
    var sete = $('#rec7').val();
    var oito = $('#rec8').val();
    var nove = $('#rec9').val();
    var dez = $('#rec10').val();
    var onze = $('#rec11').val();
    var doze = $('#rec12').val();
    var treze = $('#rec13').val();
    var quatorze = $('#rec14').val();
    var quinze = $('#rec15').val();
    var dezesseis = $('#rec16').val();
    var dezessete = $('#rec17').val();
    var dezoito = $('#rec18').val();
    var dezenove = $('#rec19').val();
    var vinte = $('#rec20').val();
    var vinteEum = $('#rec21').val();


    var parametros =
        "&numFormulario=" + numFormulario
        + "&data=" + data
        + "&horaEntr=" + horaEntr
        + "&horaViag=" + horaViag
        + "&linha=" + linha
        + "&um=" + um
        + "&dois=" + dois
        + "&tres=" + tres
        + "&quatro=" + quatro
        + "&cinco=" + cinco
        + "&seis=" + seis
        + "&sete=" + sete
        + "&oito=" + oito
        + "&nove=" + nove
        + "&dez=" + dez
        + "&onze=" + onze
        + "&doze=" + doze
        + "&treze=" + treze
        + "&quatorze=" + quatorze
        + "&quinze=" + quinze
        + "&dezesseis=" + dezesseis
        + "&dezessete=" + dezessete
        + "&dezoito=" + dezoito
        + "&dezenove=" + dezenove
        + "&vinte=" + vinte
        + "&vinteEum=" + vinteEum
        ;

    return parametros;
}
function zerarInputs() {
    $('#recNumFormulario').val("")
    $('#recData').val("")
    $('#recHoraEntr').val("")
    $('#recHoraViag').val("")
    $('#recLinha').val("")
    $('#rec1').val("");
    $('#rec2').val("");
    $('#rec3').val("");
    $('#rec4').val("");
    $('#rec4').val("");
    $('#rec6').val("");
    $('#rec7').val("");
    $('#rec8').val("");
    $('#rec9').val("");
    $('#rec10').val("");
    $('#rec11').val("");
    $('#rec12').val("");
    $('#rec13').val("");
    $('#rec14').val("");
    $('#rec15').val("");
    $('#rec16').val("");
    $('#rec17').val("");
    $('#rec18').val("");
    $('#rec19').val("");
    $('#rec20').val("");
    $('#rec21').val("");
    $('#recCidade').val("");
}


$('#recNumFormulario').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recData').focus();
    }
});
$('#recData').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recHoraEntr').focus();
    }
});
$('#recHoraEntr').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recHoraViag').focus();
    }
});
$('#recHoraViag').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recLinha').focus();
    }
});
$('#recLinha').keyup((e) => {
    if (e.keyCode === 13) {
        $('#rec1').focus();
    }
});
$('#rec1').keyup((e) => {
    if (e.keyCode === 13) {
        $('#rec2').focus();
    }
});
$('#rec2').keyup((e) => {
    if (e.keyCode === 13) {
        $('#rec3').focus();
    }
});
$('#rec3').keyup((e) => {
    if (e.keyCode === 13) {
        $('#rec4').focus();
    }
});
$('#rec4').keyup((e) => {
    if (e.keyCode === 13) {
        $('#rec5').focus();
    }
});
$('#rec5').keyup((e) => {
    if (e.keyCode === 13) {
        $('#rec6').focus();
    }
});
$('#rec6').keyup((e) => {
    if (e.keyCode === 13) {
        $('#rec7').focus();
    }
});
$('#rec7').keyup((e) => {
    if (e.keyCode === 13) {
        $('#rec8').focus();
    }
});
$('#rec8').keyup((e) => {
    if (e.keyCode === 13) {
        $('#rec9').focus();
    }
});
$('#rec9').keyup((e) => {
    if (e.keyCode === 13) {
        $('#rec10').focus();
    }
});
$('#rec10').keyup((e) => {
    if (e.keyCode === 13) {
        $('#rec11').focus();
    }
});
$('#rec11').keyup((e) => {
    if (e.keyCode === 13) {
        $('#rec12').focus();
    }
});
$('#rec12').keyup((e) => {
    if (e.keyCode === 13) {
        $('#rec13').focus();
    }
});
$('#rec13').keyup((e) => {
    if (e.keyCode === 13) {
        $('#rec14').focus();
    }
});
$('#rec14').keyup((e) => {
    if (e.keyCode === 13) {
        $('#rec15').focus();
    }
});
$('#rec15').keyup((e) => {
    if (e.keyCode === 13) {
        $('#rec16').focus();
    }
});

$('#rec16').keyup((e) => {
    if (e.keyCode === 13) {
        $('#rec17').focus();
    }
});

$('#rec17').keyup((e) => {
    if (e.keyCode === 13) {
        $('#rec18').focus();
    }
});

$('#rec18').keyup((e) => {
    if (e.keyCode === 13) {
        $('#rec19').focus();
    }
});
$('#rec19').keyup((e) => {
    if (e.keyCode === 13) {
        $('#rec20').focus();
    }
});

$('#rec20').keyup((e) => {
    if (e.keyCode === 13) {
        $('#rec21').focus();
    }
});

$('#rec21').keyup((e) => {
    if (e.keyCode === 13) {
        $('#btnCadastra').focus();
    }
});
