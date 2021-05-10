"use strict"

var hh = 0;
var mm =0;
var ss = 0;


var tempo = 1000;//Quantos milésimos valem 1 segundo?
var cron;

//Inicia o temporizador
function start() {
     //mudar a função do onclick
document.getElementById("relogio").value = 'Registrar Saída';
document.getElementById("relogio").setAttribute('onclick','pause()');
document.getElementById("relogio").setAttribute("data-bs-toggle","modal");
document.getElementById("relogio").setAttribute("data-bs-target","#exampleModal");
    cron = setInterval(() => { timer(); }, tempo);
}

//Para o temporizador mas não limpa as variáveis
function pause() {
    //mudar a função do onclick
    document.getElementById("relogio").value = 'Registar Entrada';
document.getElementById("relogio").setAttribute('onclick','start()');
document.getElementById("relogio").setAttribute("data-bs-toggle","");
document.getElementById("relogio").setAttribute("data-bs-target","");
    clearInterval(cron);
}

//Para o temporizador e limpa as variáveis
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('contador').innerText = '00:00:00';
}
//Faz a contagem do tempo e exibição
function timer() {
    ss++; //Incrementa +1 na variável ss

    if (ss == 59) { //Verifica se deu 59 segundos
        ss = 0; //Volta os segundos para 0
        mm++; //Adiciona +1 na variável mm

        if (mm == 59) { //Verifica se deu 59 minutos
            mm = 0;//Volta os minutos para 0
            hh++;//Adiciona +1 na variável hora
        }
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    //Insere o valor tratado no elemento counter
    document.getElementById('contador').innerText = format;

    //Retorna o valor tratado
    return format;
}

//Mudar a class do botão
var $divLogin = $("#relogio");
$divLogin.click(function(){
if ($divLogin.hasClass("btn-inicio"))
    $divLogin.addClass("btn-fim").removeClass("btn-inicio");

    
    

else
    $divLogin.addClass("btn-inicio").removeClass("btn-fim");



}


    );


    //criar pdf



    function criarPDF(){

        var minhaTabela = document.getElementById('minhaTabela').innerHTML;
        var style = "<style>";
        style = style + "table {width: 100%;font: 20px Calibri;}";
        style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
        style = style + "padding: 2px 3px;text-align: center;}";
        style = style + "</style>";
        // CRIA UM OBJETO WINDOW
        var win = window.open('', '', 'height=700,width=700');
        win.document.write('<html><head>');
        //win.document.write('<title>Empregados</title>');   // <title> CABEÇALHO DO PDF.
        //win.document.write(style);                                     // INCLUI UM ESTILO NA TAB HEAD
        win.document.write('</head>');
        win.document.write('<body>');
        win.document.write(minhaTabela);                          // O CONTEUDO DA TABELA DENTRO DA TAG BODY
        win.document.write('</body></html>');
        win.document.close(); 	                                         // FECHA A JANELA
        win.print();                                                            // IMPRIME O CONTEUDO
    }
    