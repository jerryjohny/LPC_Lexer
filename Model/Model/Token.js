import { program,identifier,compound_statement,expression,read_statement,simple_type,special_symbol,variable_declaration,array_type,digito,write_statement, if_statement, while_statement,texto} from "./RegExp.js"

export var token = {
    program,
    variable_declaration,
    compound_statement,
    digito,
    identifier,
    simple_type,
    array_type,
    expression,
    special_symbol,
    read_statement,
    write_statement,
    if_statement,
    while_statement,
    texto
    

    //character_constant,
    //integer_constant,
    //constant,
    //multiplying_operator,
    //adding_operator,
    //sign,
    //relational_operator,
    //variable_identifier,
    //entire_variable,
    //array_variable,
    
    
}
























/**

export var token = {
    
    letter : /[a-z]/igm,
    identifier: /[^program]([^\s+\d+][a-z]+[A-Z]*\d*\_{0,1}\1)+/igm,
    program: /program\s*(([a-z]+[A-Z]*\d*\_{0,1}\1)+)\s*;/igm, //program=/program\s*"${identifier}"\s*;/;
    vartype : /(char|integer|boolean|string|float|double|short)/gi, 
    digit : /\d/g,
    operador_relacional : /= <>|<|>|<=|>=/g,
    operador_logico : /and|or/g,
    adding_operator : /[+-]/g,//aqui não
    constant : /CONST\s+([A-Z]+\d*\_?\s*=\s*[A-Z]*\d*\_?)+/igm,
    special_symbol : /[\,\:"]|div|not|if|then|else|of|while|do|begin|end|write|read|var|array|function|procedure|true|false/g,
    characters : /[^\s[a-z]+][!@#$%^&*?":{}~?/|,]*////////g,
    //expression : /(\d+\+\s*\d+)/img

  // }

   