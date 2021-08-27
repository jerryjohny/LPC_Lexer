import { token } from './Token.js';
import { erro } from './Error_handler.js';

export function depurar(codigo){

    var linha =codigo.split('\n');
    
    for (let i=0;i<linha.length;i++){

            if (erro.erro1.test(linha[i])){
            
             $("#output_consola").append("Erro léxico em  =>  "+linha[i].match(erro.erro1)+" ,  linha: "+i+"      Dica: não inicie identificadores com digitos ou simbolos"+"</br>");
             
             alert(linha[i].match(erro.erro1)+"   <= é um erro léxico. Linha: "+i);
            }
            if (erro.erro6.test(linha[i])){
            
                $("#output_consola").append("Simbolo inesperado=>  "+linha[i].match(erro.erro6)+" ,  linha: "+i+"      Dica: evite usar simbolos em identificadores"+"</br>");
                
                alert(linha[i].match(erro.erro6)+"   <= simbolo inesperado");
            }
            if (erro.erro5.test(linha[i])){
            
                $("#output_consola").append("Erro léxico em  =>  "+linha[i].match(erro.erro5)+" ,  linha: "+i+"      Dica: separe a palavra PROGRAM do identificador e evite usar simbolos em identificadores"+"</br>");
                
                
            }
            if (erro.erro7.test(linha[i])){
            
                $("#output_consola").append("Digito inesperado  =>  "+linha[i].match(erro.erro7)+" ,  linha: "+i+"      não use digitos no meio de identificadores"+"</br>");
                
                alert(linha[i].match(erro.erro7)+"   <= Digito entre letras");
            }

    }
    if(erro.erro3.test(codigo)){
       
        var texto=$("#codigo").val().replace(erro.erro3,'begin'+"\n");
        
        $('#codigo').val(texto);
        $('#output_consola').append("BEGIN mal escrito foi autocorrigido"+"</br>");
    }
    if(erro.erro4.test(codigo)){
       
        var texto=$("#codigo").val().replace(erro.erro4,'end;'+"\n");
        
        $('#codigo').val(texto);
        $('#output_consola').append("END mal escrito foi autocorrigido"+"</br>");
    }
 }

export function clone(codigo){
    var resultado="";
    var palavra=codigo.split(" ");
    var linha=codigo.split("\n");
    var ids=[];
    var progs=[]
    
    for(let i=0 ; i<palavra.length; i++){

            if(token.program.test(palavra[i])){//token Program
                resultado=palavra[i].match(token.program[i]);

                    $("#output_consola").append("Program::       "+resultado[0]+"</br>");
                    //alert("Program::       "+resultado[0]);
            
            }
            if(token.variable_declaration.test(palavra[i])){//TOKEN variable declaration
                resultado=palavra[i].match(token.variable_declaration);
            
                    $("#output_consola").append("Variable decalration part :   "+resultado[0]+"</br>");
                   // alert("Variable decalration part :   "+resultado[0]);
            
            }
            if(token.simple_type.test(palavra[i])){//TOKEN simple type
                resultado=palavra[i].match(token.simple_type);

                    $("#output_consola").append("Simple type :   "+resultado[0]+"</br>");
                   // alert("Simple type :   "+resultado[0])

            }
            if(token.identifier.test(palavra[i])){//TOKEN identifier
                resultado=palavra[i].match(token.identifier);
                    
                    if(!(resultado[0]==='program') && !(resultado[0]==='var')&& !(resultado[0]==='int')&& !(resultado[0]==='boolean')&& !(resultado[0]==='char')&& !(resultado[0]==='begin')&& !(resultado[0]==='read')&& !(resultado[0]==='write') && !(resultado[0]==='end') && !(resultado[0]==='array')&& !(resultado[0]==='integer')&& !(resultado[0]==='true')&& !(resultado[0]==='then')&& !(resultado[0]==='do')&& !(resultado[0]==='of')&& !(resultado[0]==='while')&& !(resultado[0]==='if')){
                    $("#output_consola").append("Identifier :   "+resultado[0]+"</br>");
                   // alert("Identifier :   "+resultado[0])
                     ids.push(resultado[0]); 
                     
                    }
                 
            }
            
           if(token.digito.test(palavra[i])){//TOKEN digit
                resultado=palavra[i].match(token.digito);

                    $("#output_consola").append("Digit :   "+resultado[0]+"</br>");
                   

            }
           
            if(token.special_symbol.test(palavra[i])){//TOKEN special symbol

                resultado=palavra[i].match(token.special_symbol);
                $("#output_consola").append("Special symbol :   "+resultado[0]+"</br>");
            }
            if(token.read_statement.test(palavra[i])){//TOKEN read statement

                resultado=palavra[i].match(token.read_statement);
                $("#output_consola").append("Read statement :   "+resultado[0]+"</br>");
            }
            if(token.expression.test(palavra[i])){//TOKEN expression

                resultado=palavra[i].match(token.expression);
                for(let i=0; i<resultado.length;i++){
                    $("#output_consola").append("Expression :   "+resultado[0]+"</br>");
                }
            }
            if(token.write_statement.test(palavra[i])){//TOKEN write statement

                resultado=palavra[i].match(token.write_statement);
                for(let i=0; i<resultado.length;i++){
                    $("#output_consola").append("write statement :   "+resultado[0]+"</br>");
                }
            }
            if(token.if_statement.test(palavra[i])){//TOKEN if statement

                resultado=palavra[i].match(token.if_statement);
                for(let i=0; i<resultado.length;i++){
                    $("#output_consola").append("if statement :   "+resultado[0]+"</br>");
                }
            }
            if(token.while_statement.test(palavra[i])){//TOKEN while statement

                resultado=palavra[i].match(token.while_statement);
                for(let i=0; i<resultado.length;i++){
                    $("#output_consola").append("while statement :   "+resultado[0]+"</br>");
                }
            }

    }

    for(let j=0; j<=linha.length;j++){


        if(token.texto.test(linha[j])){//token texto
            resultado=linha[j].match(token.texto);

                $("#output_consola").append("Texto::       "+resultado[0]+"</br>");
               // alert("Texto::       "+resultado[0]);
        
        }
       
    }
    $("#side").html("");
    $("#side").append(`</br></br></br><h5>Área de trabalho</h5></br></br></br>`); 
    
    //$("#side").append(`<strong>&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;</strong>`+ids[0]+"</br>"); 
    progs.push(ids[0]);
    for (let i=0; i<progs.length; i++){

        $("#side").append(`<strong>&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;</strong>`+progs[i]+"</br>");
    }

    ids=null;


   // alert(ids[2]);
}

export function depurar2(codigo){

    var linha =codigo.split('\n');
    
    for (let i=0;i<linha.length;i++){

            if (erro.erro1.test(linha[i])){
            
             $("#output_consola").append("Erro léxico em  =>  "+linha[i].match(erro.erro1)+" ,  linha: "+i+"      Dica: não inicie identificadores com digitos ou simbolos"+"</br>");
             
            }
            if (erro.erro6.test(linha[i])){
            
                $("#output_consola").append("Simbolo inesperado=>  "+linha[i].match(erro.erro6)+" ,  linha: "+i+"      Dica: evite usar simbolos em identificadores"+"</br>");
                
            }
            if (erro.erro5.test(linha[i])){
            
                $("#output_consola").append("Erro léxico em  =>  "+linha[i].match(erro.erro5)+" ,  linha: "+i+"      Dica: separe a palavra PROGRAM do identificador e evite usar simbolos em identificadores"+"</br>");
                
            }
            if (erro.erro7.test(linha[i])){
            
                $("#output_consola").append("Digito inesperado  =>  "+linha[i].match(erro.erro7)+" ,  linha: "+i+"      não use digitos no meio de identificadores"+"</br>");
                
            }
    }
    /*if(erro.erro3.test(codigo)){
       
        var texto=$("#codigo").val().replace(erro.erro3,'begin'+"\n");
        $('#codigo').val(texto);
    }*/
    if(erro.erro4.test(codigo)){
       
        var texto=$("#codigo").val().replace(erro.erro4,'end ;'+"\n");
        $('#codigo').val(texto);
    }
 }



















 