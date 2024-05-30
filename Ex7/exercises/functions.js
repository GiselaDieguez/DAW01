function sum(a, b) {
    return a + b;
}

var result = sum(5, 7);
console.log('El resultado de la suma es ' + result);

function validatedSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('Uno de los parametros tiene un error.');
        return NaN;
    }
    return a + b;
}
var validatedResult = validatedSum(5, 'seven');
console.log('El resultado de la suma es ' + validatedResult);

function validateInteger(num) {
    return Number.isInteger(num);
}
console.log('Es 5 un integer? ' + validateInteger(5));
console.log('Es 5.5 un integer? ' + validateInteger(5.5));

function validatedSumWithIntegerCheck(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('Uno de los parametros tiene un error.');
        return NaN;
    }
    if (!validateInteger(a)) {
        alert(a + ' no es un integer, redondeando a ' + Math.round(a));
        a = Math.round(a);
    }
    if (!validateInteger(b)) {
        alert(b + ' no es un integer, redondeando a ' + Math.round(b));
        b = Math.round(b);
    }
    return a + b;
}
var resultWithIntegerCheck = validatedSumWithIntegerCheck(5.7, 7.4);
console.log('El resultado es ' + resultWithIntegerCheck);

function roundIfNotInteger(num) {
    if (!validateInteger(num)) {
        alert(num + ' no es un integer, redondeando a ' + Math.round(num));
        return Math.round(num);
    }
    return num;
}

function finalValidatedSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('Uno de los parametros tiene un error.');
        return NaN;
    }
    a = roundIfNotInteger(a);
    b = roundIfNotInteger(b);
    return a + b;
}
var finalResult = finalValidatedSum(5.7, 7.4);
console.log('El resultado final de la suma es: ' + finalResult);
