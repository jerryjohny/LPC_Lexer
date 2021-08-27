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
export const identifier=new RegExp(`(${letter}+\_?${digit}*)+`,"igm");
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
































/*
const special=` (\:\=)| div | or | and | not | if | then | else | of |
while | do | begin | end | read | write | var | array | function |procedure | program | true | false | char | integer | boolean`
export const special_simbol=new RegExp(`${special}`,"img")
export const program=/program\s+(([a-z]+\d*\_?\1)+)\s*;/img
export const  letter_mai = `[A-Za-z]`
export const letter = new RegExp(`${letter_mai}`,"ig")
export const dgt = `[0-9]`
export const digit = new RegExp(`\s+${dgt}+\s+`,"g")
export const identifier = new RegExp(`[^${special_simbol} ](${letter_mai}+${dgt}*\_?)+`,"img")
export const character_constant = new RegExp(`${letter_mai}|${dgt}`,"g") 
export const integer_constant = /\d+/g
export const constant = new RegExp(`${dgt}|(${letter_mai}|${dgt})|(${letter_mai}+${dgt}*\_?)+`,"img")
export const multiplying_operator=/\*|div/g
export const adding_operator = /[+-]/
export const signito = `[+-s]`
export const sign = new RegExp(`${signito}`,"gm")
export const relational_operator_one = `=|<>|<|<=|>=|>|\sor\s|and`
export const relational_operator = new RegExp(`${relational_operator_one}`,"gi")
export const variable_identifier = new RegExp(identifier)
export const entire_variable = new RegExp(variable_identifier)
export const array_variable = new RegExp(entire_variable)
export const expression=new RegExp(`(${letter_mai}|${dgt})+\s*(${adding_operator}|${multiplying_operator})\s*(${letter_mai}|${dgt})`,"img")
*/