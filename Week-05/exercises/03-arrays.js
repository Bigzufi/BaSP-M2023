console.log('--EXERCISE 3: ARRAYS');

/* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/
console.log('-Exercise 3.a:');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(months[4], months[10]);

/* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
console.log('-Exercise 3.b:');

var monthsSort = [].concat(months);
monthsSort.sort();

console.log(monthsSort);
/* c. Agregar un elemento al principio y al final del array (utilizar unshift y push).*/
console.log('-Exercise 3.c:');

var monthsAdd = [].concat(months);
monthsAdd.unshift('Hello');
monthsAdd.push('Bye');

console.log(monthsAdd);
/* d. Quitar un elemento del principio y del final del array (utilizar shift y pop).*/
console.log('-Exercise 3.d:');

var monthsSub = [].concat(months);
monthsSub.shift();
monthsSub.pop();

console.log(monthsSub);
/* e. Invertir el orden del array (utilizar reverse).*/
console.log('-Exercise 3.e:');

var monthsRev = [].concat(months);
monthsRev.reverse();

console.log(monthsRev);
/* f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/
console.log('-Exercise 3.f:');

console.log(months.join('-'));
/* g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/
console.log('-Exercise 3.g:');

var monthsSlc = months.slice(4, 10);

console.log(monthsSlc);