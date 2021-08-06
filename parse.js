var number1 = 15;
var number2 = '15.5';

// number1 = parseInt(number1);
var number1 = '' + number1;

number1 = +number1;

number2 = parseFloat(number2);

console.log(number1+number2);
console.log(typeof number1);