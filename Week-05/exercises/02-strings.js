console.log('--EXERCISE 2: STRINGS');
/* a. Crear una variable de tipo string con al menos 10 caracteres 
y convertir todo el texto en mayúscula (utilizar toUpperCase).*/
console.log('-Exercise 2.a:');

var firstString = 'asynchronous';

console.log(firstString.toUpperCase());
/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
 con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log('-Exercise 2.b:');

var secondString = 'fabricated';

var secondStringSub = secondString.substring(0,5);

console.log(secondStringSub);
/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los
 últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log('-Exercise 2.c:');

var thirdString = 'habilitated';

var thirdStringSub = thirdString.substring((thirdString.length - 3), thirdString.length);

console.log(thirdStringSub);
/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la 
primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +).*/
console.log('-Exercise 2.d:');

var fourthString = 'maccaronies';

var fourthStringCap = fourthString.substring(0,1).toUpperCase() + fourthString.substring(1, fourthString.length).toLowerCase();

console.log(fourthStringCap);
/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
console.log('-Exercise 2.e:');

var fifthString = 'White Space';

var fifthStringSpace = fifthString.indexOf(' ');

console.log(fifthStringSpace);
/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio
entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que 
tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar 
indexOf, substring, toUpperCase, toLowerCase y el operador +).*/
console.log('-Exercise 2.f:');

var sixthString = 'fabricating maccaronies'

var sixthStringCap = sixthString.substring(0,1).toUpperCase() + sixthString.substring(1, sixthString.indexOf(' '))
+ ' ' + sixthString.substring((sixthString.indexOf(' ') + 1), (sixthString.indexOf(' ') + 2)).toUpperCase() + 
sixthString.substring((sixthString.indexOf(' ') + 2), sixthString.length);

console.log(sixthStringCap);