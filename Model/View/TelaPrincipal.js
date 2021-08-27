import { depurar,clone, depurar2} from './../Model/Lexer.js';



var contador_linhas=1;

$(document).ready(function(){

            var text = $("#codigo").val();   
            var lines = text.split(/\r|\r\n|\n/);
            var count = lines.length;

            for(let a=1; a<=count; a++){
                
                $("#linhas").append(a+"<br>") ;
            }
 });

 $("#codigo").scroll(function(){

    var linha=$("#linhas");
    var codigo=("#codigo");
    $('#linhas').scrollTop($('#linhas')[0].scrollHeight);

  });

$("#ic_fechar").click(function(){
    
    $("#side").hide();
    $("#mae").css("width","100%");
    $("#ic_abrir_side").show();
});

$("#ic_abrir_side").click(function(){

    $("#side").show();
    $("#mae").css("width","85%");
    $("#ic_abrir_side").hide();
});

$("#codigo").keypress(function(event){

    var text = $("#codigo").val();   
    var lines = text.split(/\r|\r\n|\n/);
    var count = lines.length;

    $("#linhas").text("");
    for(let a=1; a<=count; a++){
        $("#linhas").append(a+"<br>") ;
    }
});

$("#codigo").click(function(){
    
    $("#consola").css("height","38%");
});

$("#consola").click(function(){
    
        $("#consola").css("height","60%");
 });
//Execucao do programa
$("#bt_executar").click(function(){
  
    $("#output_consola").html("");
    var t=$("#codigo").val(); 
    var a = performance.now();
    //verificar(t);
    //depurar2(t); por sugestão do docente, desativamos esta função
    clone(t);
    var b = performance.now();
    $('#output_consola').append('</br>'+'Tempo: ' + ((b - a)/1000) + ' s.'+'</br></br></br></br></br></br></br></br></br>');
   
});
//depuracao
$("#bt_depurar").click(function(){

    $("#output_consola").html("");
    var t=$("#codigo").val(); 
    var a = performance.now();
    depurar(t);
    var b = performance.now();
    $('#output_consola').append('</br>'+'Tempo: ' + ((b - a)/1000) + ' s.'+'</br></br></br></br></br></br></br></br></br>');

});

$("#bt_executar").mouseover(function(){

    $("#bt_executar").css("height","2px");
    $("#bt_executar").css("background","rgb(61, 117, 117)");
    $("#bt_executar").css("border-radius","5px");
    
 });

 $("#bt_executar").mouseout(function(){

    $("#bt_executar").css("background","none");

 });

 $("#bt_depurar").mouseover(function(){
    
    $("#bt_depurar").css("background","rgb(61, 117, 117)");
    $("#bt_depurar").css("border-radius","5px");
    
 });

 $("#bt_depurar").mouseout(function(){

    $("#bt_depurar").css("background","none");
    
 });




















