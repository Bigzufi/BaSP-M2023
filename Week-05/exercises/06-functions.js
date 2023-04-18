console.log('--EXERCISE 6: FUNCTIONS');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de 
dicha variable en la consola del navegador.*/
console.log('-Exercise 6.a:');

function sumNumber(a,b) {
    return a + b;
};

var addNum = sumNumber(33, 55);

console.log(addNum);
/* b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de 
los parámetros no es un número; de no ser un número, mostrar un alert aclarando que uno de los 
parámetros tiene error y retornar el valor NaN como resultado.*/
console.log('-Exercise 6.b:');

function sumNumber(a,b) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number'){
        alert('One of the parameter has an error');
        return NaN;
    } else {
        return a+b;
    }
};
var checkNumber = sumNumber(65, 122);

console.log(checkNumber);
/* c. Crear una función “validateInteger” que reciba un número 
como parámetro y devuelva verdadero si es un número entero.*/
console.log('-Exercise 6.c:');

function validateInteger (i){
    return (i%1 === 0);
};
var checkNumInt = validateInteger(-2);

console.log(checkNumInt);
/* d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la 
función del ejercicio 6c. y que valide que los números sean enteros. En caso que haya 
decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado).*/
console.log('-Exercise 6.d:');

function sumNumberInt(a,b) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number'){
        alert('One of the parameter has an error');
        return NaN;
    } else if (!validateInteger(a)){
        alert('The first number is not an integer');
        return Math.round(a);
    } else if (!validateInteger(b)){
        alert('The second number is not an integer');
        return Math.round(b);
    } else {
        return a+b;
    }
};

var checkSumInt = sumNumberInt(55, 22.4);

console.log(checkSumInt);
/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro
de una nueva función probando que todo siga funcionando igual que en el apartado anterior.*/
console.log('-Exercise 6.e:');

function validateNumbInt (z) {
    if(typeof(z)!== 'number'){
        alert('The parameter is not a number');
        return NaN;
    } else if((z%1 !== 0)) {
        alert('The number is not an integer');
        console.log(Math.round(z));
        return false;
    } else {
        return z;
    }
};

function validatedSum(a,b) {
    return validateNumbInt(a) + validateNumbInt(b);
}

var checkValidSum = validatedSum(10, 22);

console.log(checkValidSum);