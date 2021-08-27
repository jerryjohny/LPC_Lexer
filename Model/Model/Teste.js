const digito = /[^0-9]/g;
var texto = '1 + 4nmj';
var texto2 = 'carrrr charitomancsvsvscharitochar  float FLOAT Flot ';


console.log(texto.match(digito));


const simpleType=/int|char|boolean|string|float|short/ig;
console.log(texto2.match(simpleType));
