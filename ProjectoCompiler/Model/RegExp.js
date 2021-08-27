export const letter=`[a-z]`;
export const digit=`[0-9]`;
export const digito=/\d+/;
export const operador=`[+*-/]`;
export const symbols=/\+|\-|\*|\=|\<\>|\<|\>|\<\=|\>\=|\(|\)|\[|\]|\:\=|\.|\,|\;|\:|\.\.|div|or|and|not|if|then|else|of|while|do\s|begin|end|read|write|var|array|function|procedure|program|true|false|char|integer|boolean/
//texto
export const texto=/\".+[^.]+\"/;
//expressao
export const expression=new RegExp(`(${letter}|${digit})+\s*${operador}\s*(${letter}|${digit})+`,"img");
//id
export const identifier=new RegExp(`(${letter}|\_)+(\_|${letter}|${digit})*`,"igm");
//special symbol
export const special_symbol=new RegExp(`${symbols}`,"img")
//simple type
export const simple_type=/char|integer|boolean/img
//array type
export const array_type=/array\s*\[\d+\]\s*of\s*(char|integer|boolean)/img
export const variable_declaration=/\s+var\s+/img
//program
export const program=/program\s+([a-z]+\_?\d*)+\s*;/img 
//statements
export const if_statement=/if\s+([a-z]|\d)+\s*[<>=]\s*([a-z]|\d)+\s+then/img;
export const while_statement=/while\s+([a-z]|\d)+\s*[<>=]+\s*([a-z]|\d)+\s+do/img;
export const read_statement=/read\([a-z]+\_{0,1}[a-z]*\d*\)/img;
export const write_statement=/write\(([a-z]+\_{0,1}[a-z]*\d*\,?\s*(\+|\-|\*|\/)?\s*)+\)/img;
export const compound_statement=/begin.*[^.]*end;/img








