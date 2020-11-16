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
});

$('#recFolha').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recPontos').focus()
    }
});

$('#recPontos').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recNumeroPessoa').focus()
    }
});

$('#recNumeroPessoa').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recNome').focus()
    }
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
});

$('#recSexo').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recIdade').focus()
    }
});

$('#recIdade').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recInstrucao').focus()
    }
});

$('#recLongitude').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recZona').focus()
    }
});

$('#recLongitude').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recZona').focus()
    }
});

$('#recLongitude').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recZona').focus()
    }
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
});

$('#recAtividade').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recSetorAtividade').focus()
    }
});

$('#recSetorAtividade').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recRenda').focus()
    }
});

$('#recRenda').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recViagens').focus()
    }
});

$('#recViagens').keyup((e) => {
    if (e.keyCode === 13) {
        $('#btnPessoa').focus()
    }
});

$('#recDigitador').keyup((e) => {
    if (e.keyCode === 13) {
        $('#recLatitude').focus()
    }
});

/************************ Atalhos ********************************/ 

$(document).keydown((e) => {
    let testeKeyDown = e.keyCode;
    if (testeKeyDown === 17) {
        $(document).keyup((e) => {
            let testekeyUp = e.keyCode;
            if (testeKeyDown === 17 && testekeyUp === 86 ) {
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
            if (testeKeyDown === 17 && testekeyUp === 80 ) {
                $('#recNumeroPessoa').focus();
            }
        });
    }
});

/************************ Viagens ********************************/ 

$('#recNumViagem').keyup((e)=>{
    if(e.keyCode === 13){
        $('#recNuPessoas').focus()
    }
});

$('#recNuPessoas').keyup((e)=>{
    if(e.keyCode === 13){
        $('#recVresidencia').focus()
    }
});

$('#recVresidencia').keyup((e)=>{
    if(e.keyCode === 13){
        $('#recLocal').focus()
    }
});

$('#recLocal').keyup((e)=>{
    if(e.keyCode === 13){
        $('#recSaida').focus()
    }
});

$('#recSaida').keyup((e)=>{
    if(e.keyCode === 13){
        $('#recDestino').focus()
    }
});

$('#recDestino').keyup((e)=>{
    if(e.keyCode === 13){
        $('#recDestZona').focus()
    }
});

$('#recDestZona').keyup((e)=>{
    if(e.keyCode === 13){
        $('#recMot').focus()
    }
});

$('#recMot').keyup((e)=>{
    if(e.keyCode === 13){
        $('#recModo').focus()
    }
});

$('#recModo').keyup((e)=>{
    if(e.keyCode === 13){
        $('#recModo1').focus()
    }
});

$('#recModo1').keyup((e)=>{
    if(e.keyCode === 13){
        $('#recModo2').focus()
    }
});

$('#recModo2').keyup((e)=>{
    if(e.keyCode === 13){
        $('#recCont').focus()
    }
});

$('#recCont').keyup((e)=>{
    if(e.keyCode === 13){
        $('#btnViagens').focus()
    }
});