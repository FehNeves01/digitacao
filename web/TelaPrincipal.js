var campoComErro;



/************************ Casa & moradores ********************************/
$('#recLatitude').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recLongitude').focus()
    }
});

$('#recLongitude').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recZona').focus()
    }
});

$('#recZona').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recFolha').focus()
    }
    configurandoCampoNumerico(e.keyCode, $('#recZona'));
});

$('#recFolha').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recPontos').focus()
    }
    configurandoCampoNumerico(e.keyCode, $('#recFolha'));
});

$('#recPontos').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recNumeroPessoa').focus()
    }
    configurandoCampoNumerico(e.keyCode, $('#recPonto'));
});

$('#recNumeroPessoa').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recNome').focus()
    }
    configurandoCampoNumerico(e.keyCode, $('#recPessoa'));
});

$('#recNome').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recSituacao').focus()
    }
});

$('#recSituacao').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recSexo').focus()
    }
    configurandoCampoNumerico(e.keyCode, $('#recSituacao'));
});

$('#recSexo').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recIdade').focus()
    }
    configurandoCampoNumerico(e.keyCode, $('#recSexo'));
});

$('#recIdade').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recInstrucao').focus()
    }
    configurandoCampoNumerico(e.keyCode, $('#recIdade'));
});

$('#recLongitude').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recZona').focus()
    }
});

$('#recInstrucao').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recAtividade').focus()
    }
    configurandoCampoNumerico(e.keyCode, $('#recInstrucao'));
});

$('#recAtividade').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recSetorAtividade').focus()
    }
    configurandoCampoNumerico(e.keyCode, $('#recAtividade'));
});

$('#recSetorAtividade').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recRenda').focus()
    }
    configurandoCampoNumerico(e.keyCode, $('#recSetorAtividade'));
});

$('#recRenda').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recViagens').focus()
    }
    configurandoCampoNumerico(e.keyCode, $('#recRenda'));
});

$('#recViagens').keyup((e) => {
    if (e.keyCode === 13) {
        $('#btnPessoa').focus()
    }
    configurandoCampoNumerico(e.keyCode, $('#recViagens'));
});

$('#recDigitador').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recLatitude').focus()
    }
});

/************************ Mascaras ********************************/
//primeira funcao que carrega quando o body carrega existem outras sintexe mas gosto dessa
$(() => {
    $(".campoHora").mask("00:00");
    $(".campoNumerico").attr("type", "number");
    $(".campoNumerico").mask("00");
    $(".campoDinheiro").mask("000.000.000,00", { reverse: true });
    $(".campoDinheiro").attr("type", "text");
});

/************************ Configuracao Inputs vazios ********************************/
function configurandoCampoNumerico(numeroEvento, campoID) {
    if (numeroEvento === 48) {
        var valorDoCampo = $(campoID).val();
        if (valorDoCampo === "0") {
            $(campoID.val(""));
        }
    }
}
$(".campoImportante").blur((e) => {

    jqVal = $("#" + e.currentTarget.id).val();
    console.log();
    if (jqVal === "") {
        $("#" + e.currentTarget.id).focus();
        $("#" + e.currentTarget.id).attr("placeholder", "Campo Obrigatorio *");
        $("#" + e.currentTarget.id).attr("style", "background-color: rgba(246, 83, 54, 0.1);");
        campoComErro = true;
    } else {
        $("#" + e.currentTarget.id).attr("style", "background-color: rgba(255, 255, 255, 0.1);");
        campoComErro = false;
    }

    //console.log(e);
});


/************************ Fim Mascaras ********************************/

/************************ Atalhos ********************************/

$(document).keydown((e) => {
    let testeKeyDown = e.keyCode;
    if (testeKeyDown === 17) {
        $(document).keyup((e) => {
            let testekeyUp = e.keyCode;
            if (testeKeyDown === 17 && testekeyUp === 86) {
                $('#recNumViagem').focus();
            }
        });
    }
});

$(document).keydown((e) => {
    let testeKeyDown = e.keyCode;
    if (testeKeyDown === 17) {
        $(document).keyup((e) => {
            let testekeyUp = e.keyCode;
            if (testeKeyDown === 17 && testekeyUp === 80) {
                $('#recNumeroPessoa').focus();
            }
        });
    }
});

/************************ Viagens ********************************/

$('#recNumViagem').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recNuPessoas').focus()
    }
    configurandoCampoNumerico(e.keyCode, $('#recNumViagem'));
});

$('#recNuPessoas').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recVresidencia').focus()
    }
    configurandoCampoNumerico(e.keyCode, $('#recNuPessoas'));
});

$('#recVresidencia').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recLocal').focus()
    }
    configurandoCampoNumerico(e.keyCode, $('#recVresidencia'));
});

$('#recLocal').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recSaida').focus()
    }
    configurandoCampoNumerico(e.keyCode, $('#recVresidencia'));
});

$('#recSaida').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recDestino').focus()
    }
});

$('#recDestino').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recDestZona').focus()
    }
});

$('#recDestZona').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recMot').focus()
    }
    configurandoCampoNumerico(e.keyCode, $('#recDestZona'));
});

$('#recMot').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recModo').focus()
    }
    configurandoCampoNumerico(e.keyCode, $('#recMot'));
});

$('#recModo').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recModo1').focus()
    }
    configurandoCampoNumerico(e.keyCode, $('#recModo'));
});

$('#recModo1').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recModo2').focus()
    }
    configurandoCampoNumerico(e.keyCode, $('#recModo1'));
});

$('#recModo2').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recCont').focus()
    }
    configurandoCampoNumerico(e.keyCode, $('#recModo2'));
});

$('#recCont').keyup((e) => {
    if (e.keyCode === 13) {
        $('#btnViagens').focus()
    }
    configurandoCampoNumerico(e.keyCode, $('#recCont'));
});


function testaInputs(classeDeInputs) {
    var retorno = false;
    var elementosInputs = []
    elementosInputs = classeDeInputs;
for (let i = 0; i < elementosInputs.length; i++) {
        
        let pegandoId = $("#" + elementosInputs[i].id);
        console.log(pegandoId.val());
        console.log(pegandoId.id)
        console.log(pegandoId)
        if (pegandoId.val() == '') {
            console.log(pegandoId.val() == '');
            
            pegandoId.toggleClass('campoErrado');
            
            returno= true;
        } 
    }
    return retorno

}








async function dadosPessoas() {


    campoComErro = testaInputs($(".camposMoradores"));
    if ((document.getElementById("recDigitador").value).trim() !== "") {
        alert(campoComErro);
        if ((document.getElementById("recZona").value !== "") && (document.getElementById("recFolha").value !== "") && campoComErro === false) {

            limpaTabelaMoradores();
            var recLatitude = document.getElementById("recLatitude").value;
            var recLongitude = document.getElementById("recLongitude").value;
            var recZona = document.getElementById("recZona").value;
            var recFolha = document.getElementById("recFolha").value;
            var recPontos = document.getElementById("recPontos").value;
            var recDigitador = document.getElementById("recDigitador").value;

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

            var id = "&id_casa=" + recZona + recFolha;
            var latitude = "&latitude=" + recLatitude;
            var longitude = "&longitude=" + recLongitude;
            var zona = "&zona=" + recZona;
            var folha = "&folha=" + recFolha;
            var pontos = "&ponto=" + recPontos;
            var digitador = "&digitador=" + recDigitador;

            var NumeroPessoa = "&NumeroPessoa=" + recNumeroPessoa;
            var Nome = "&Nome=" + recNome;
            var Situacao = "&Situacao=" + recSituacao;
            var Sexo = "&Sexo=" + recSexo;
            var Idade = "&Idade=" + recIdade;
            var Instrucao = "&Instrucao=" + recInstrucao;
            var Atividade = "&Atividade=" + recAtividade;
            var Renda = "&Renda=" + recRenda;
            var Viajens = "&Viajens=" + recViajens;
            var setorAtividade = "&setorAtividade=" + recSetorAtividade;
            var urlJson;
            await fetch("urlsJSON.json").then((r) => r.json()).then((rj) => {
                urlJson = rj
            });
            var url = urlJson.exportar.apidados + "?acao=cadCasaMoradores"
                + id
                + latitude
                + longitude
                + zona
                + folha
                + pontos
                + digitador
                + NumeroPessoa
                + Nome
                + Situacao
                + Sexo
                + Idade
                + Instrucao
                + Atividade
                + Renda
                + Viajens
                + setorAtividade
                ;
            console.log(url);
            await fetch(url).then((r) => r.json()).then((rj) => {
                console.log(rj);
                var corpoDaTabela = document.getElementById("corpoTabelaMoradores");

                rj.forEach(element => {
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
                    var Id = document.createElement("td");

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
                    console.log(tr);

                    corpoDaTabela.appendChild(tr);
                });


            });
            limparCamposPessoas();
        } else {
            alert("Há Campos Importantes Vazios");
            $('#recZona').focus();
        }
    } else {
        alert("Favor Preencher Nome Digitador");
        document.getElementById("recDigitador").focus();
    }
}
async function dadosViagens() {
    if ((document.getElementById("recDigitador").value).trim() !== "") {
        if ((document.getElementById("recZona").value !== "") && (document.getElementById("recFolha").value !== "")) {
            limpaTabelaViagens();
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
            var recDigitador = document.getElementById("recDigitador").value;
            var recNumViagem = document.getElementById("recNumViagem").value;

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
                + "&digitador=" + recDigitador
                + "&numeroViagem=" + recNumViagem;
            ;
            var urlJson;
            await fetch("urlsJSON.json").then((r) => r.json()).then((rj) => {
                urlJson = rj
            });
            var url = urlJson.exportar.apidados + "?acao=cadViagens" + parametros;

            console.log(url);
            await fetch(url).then((r) => r.json()).then((rj) => {
                var corpoDaTabela = document.getElementById("viajens");


                rj.forEach(element => {
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
                    var recNumViagem = document.createElement("td");
                    id.textContent = element.id;
                    recNuPessoa.textContent = element.numeroPessoa;
                    recVresidencia.textContent = element.viajensResidencia;
                    recLocal.textContent = element.local;
                    recSaida.textContent = element.hora;
                    recDestino.textContent = element.destino;
                    recDestinoZona.textContent = element.zona;
                    recMot.textContent = element.mot;
                    recCont.textContent = element.cont;
                    recModo.textContent = element.value;
                    recModo1.textContent = element.value1;
                    recModo2.textContent = element.value2;
                    recNumViagem.textContent = element.numeroViagem;

                    tr.appendChild(id);
                    tr.appendChild(recNumViagem);
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
        } else {
            alert("Favor Preencher Zona ou Folha");
        }
    } else {
        alert("Favor Preencher Nome Digitador");
        document.getElementById("recDigitador");
    }
}
function limparCamposPessoas() {
    var recNumeroPessoa = document.getElementById("recNumeroPessoa").value = "";
    var recNome = document.getElementById("recNome").value = "";
    var recSituacao = document.getElementById("recSituacao").value = "";
    var recSexo = document.getElementById("recSexo").value = "";
    var recIdade = document.getElementById("recIdade").value = "";
    var recInstrucao = document.getElementById("recInstrucao").value = "";
    var recAtividade = document.getElementById("recAtividade").value = "";
    var recRenda = document.getElementById("recRenda").value = "";
    var recViajens = document.getElementById("recViagens").value = "";
    document.getElementById("recSetorAtividade").value = "";
    document.getElementById("recNumeroPessoa").focus();
}
function limparCamposViagens() {
    var recNumViagens = document.getElementById("recNumViagem").value = "";
    var recNuPessoas = document.getElementById("recNuPessoas").value = "";
    var recVresidencia = document.getElementById("recVresidencia").value = "";
    var recLocal = document.getElementById("recLocal").value = "";
    var recSaida = document.getElementById("recSaida").value = "";
    var recDestino = document.getElementById("recDestino").value = "";
    var recDestZona = document.getElementById("recDestZona").value = "";
    var recMot = document.getElementById("recMot").value = "";
    var recModo = document.getElementById("recModo").value = "";
    var recModo1 = document.getElementById("recModo1").value = "";
    var recModo2 = document.getElementById("recModo2").value = "";
    var recCont = document.getElementById("recCont").value = "";
    //                var recIdViagens = document.getElementById("recIdViagens").value = "";
    document.getElementById("recNumViagem").focus();
}
function novaPesquisa() {
    limpaTabelas()
    limparCamposPessoas();
    limparCamposViagens();

    document.getElementById("recLatitude").value = "";
    document.getElementById("recLongitude").value = "";
    document.getElementById("recLongitude").value = "";
    document.getElementById("recZona").value = "";
    document.getElementById("recFolha").value = "";
    document.getElementById("recPontos").value = "";
    document.getElementById("recLatitude").focus();
}
function limpaTabelas() {
    limpaTabelaMoradores();
    limpaTabelaViagens();
}

function limpaTabelaMoradores() {
    var corpoDaTabelaMoradores = document.getElementById("corpoTabelaMoradores");
    if (corpoDaTabelaMoradores.parentNode) {
        corpoDaTabelaMoradores.parentNode.removeChild(corpoDaTabelaMoradores);
    }
    var tabelaMoradores = document.getElementById("tabelaMoradores");
    var tbodyTabelaMoradores = document.createElement("tbody");
    tbodyTabelaMoradores.id = "corpoTabelaMoradores";
    tabelaMoradores.appendChild(tbodyTabelaMoradores);
}

function limpaTabelaViagens() {
    var coporDaTabelaViajens = document.getElementById("viajens");

    if (coporDaTabelaViajens.parentNode) {
        coporDaTabelaViajens.parentNode.removeChild(coporDaTabelaViajens);
    }
    var tabelaViagens = document.getElementById("tabelaViagens");

    var tbodyTabelaViagens = document.createElement("tbody");
    tbodyTabelaViagens.id = "viajens";
    tabelaViagens.appendChild(tbodyTabelaViagens);
}