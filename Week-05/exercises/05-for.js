console.log('--EXERCISE 5: FOR');
/* a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle 
for de JavaScript para mostrar una alerta utilizando cada una de las palabras.*/
console.log('-Exercise 5.a:');

var potterArr = ['harry', 'ron', 'hermione', 'severus', 'albus'];

for (var i = 0; i < potterArr.length; i++) {
    var character = potterArr[i];
    alert(character);
};

console.log(potterArr);
/* b. Al array anterior convertir la primera letra de cada palabra en mayúscula y 
mostrar una alerta por cada palabra modificada.*/
console.log('-Exercise 5.b:');

var potterArrCap = [].concat(potterArr);

for (var x = 0; x < potterArrCap.length; x++) {
    potterArrCap[x] = potterArrCap[x].substring(0,1).toUpperCase() + 
    potterArrCap[x].substring(1, potterArrCap[x].length).toLowerCase();
    alert(potterArrCap[x]);
};
console.log(potterArrCap);
/* c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) 
recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. 
Al final mostrar una única alerta con la cadena completa.*/
console.log('-Exercise 5.c:');

var sentence = '';

for (var y = 0; y < potterArr.length; y++) {
    var sentence = sentence + ' ' + potterArr[y];
};
alert(sentence);

console.log(sentence);
/* d. Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, 
es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 
hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).*/
console.log('-Exercise 5.d:');

var emptyArr = [];
for (var z = 0; z < 10; z++) {
    emptyArr.push(z)    
}

console.log(emptyArr)