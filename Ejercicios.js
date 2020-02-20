/* (1)
Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado.
“Hola mi nombre es sebastián yabiku y mi edad 33”
*/

let presentation = (nombre, apellido, edad) => `Hola, mi nombre es ${nombre} ${apellido} y mi edad es ${edad} años.`

/* (2)
Cree una función que tome números y devuelva la suma de sus cubos.
sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
*/

let sumOfCubes = function()  {
	let sum = 0;
	
	for (let i = 0; i < arguments.length; i++) {
		console.log(arguments[i])
		sum = sum + Math.pow(arguments[i], 3);
	}
	return sum;
}

/* (3)
Crear una funcion que me retorne el tipo de valor entregado, utilizar la función e imprimir los distintos tipos de JS.
*/

let valueType = a => typeof(a);

/* (4)
Crear una función que reciba n cantidad de argumentos y los sume (utilizar parametros rest).
*/

let sumOfArguments = (...Args) => {
	let sum = 0;
	Args.forEach(element => {
		sum = sum + element;
	})

	return sum;
}

/* (5)
Crear una función que reciba una matriz de valores y filtre los valores que no son string.
*/

let filterStrings = a => a.filter(e => typeof e == 'string')

/* (6)
Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
*/

let minMax = a => [Math.min(...a), Math.max(...a)];

/* (7)
Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
*/

let formatPhoneNumber = function(a) {
	return `(${a[0]}${a[1]}${a[2]}) ${a[3]}${a[4]}${a[5]}-${a[6]}${a[7]}${a[8]}${a[9]}`};

/* (8)
Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
*/

let findLargestNums = a => a.map(e => Math.max(...e));

/* (9)
Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.
*/

let charIndex = (word, char) =>	(word.indexOf(char) == -1) ? `There are no occurrences of the given letter in the word ${word}.` : `The first "${char}" has index ${word.indexOf(char)}, the last "${char}" has index ${word.lastIndexOf(char)}`;

/* (10)
Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
*/

let toArray = obj => {
	let a = [];
	Object.keys(obj).forEach(key => a.push([key, obj[key]]));
	return a;
}

// O se puede utilizar el método entries

/* (11)
Cree una función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.
getBudgets([
 { name: "John", age: 21, budget: 23000 },
 { name: "Steve", age: 32, budget: 40000 },
 { name: "Martin", age: 16, budget: 2700 }
]) ➞ 65700
*/

let getBudgets = a => {
	let sum = 0;
	a.forEach(obj => sum = sum + obj.budget);
	return sum;
}

/* (12)
Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
getStudentNames([
 { name: "Steve" },
 { name: "Mike" },
 { name: "John" }
]) ➞ ["Becky", "John", "Steve"]
*/

let getStudentNames = a => a.map(obj => obj.name);

/* (14)
Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados incluyendo n.
squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14
*/

let squaresSum = n => {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += Math.pow(i, 2);
	}
	return sum;
}

/* (15)
Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada.
multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
*/

let multiplyByLength = a => a.map(e => e * a.length);

/* (16)
Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
countdown(5) ➞ [5, 4, 3, 2, 1, 0]
*/

let countdown = num => {
	let a = [];
	for (let i = num; i >= 0; i--) {
		a.push(i);
	}
	return a;
}

/* (17)
) Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.
*/

let diffMaxMin = a => Math.max(...a) - Math.min(...a);

/* (18)
Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]
*/

let filterList = a => a.filter(e => typeof e == 'number');

/* (19)
Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
repeat(13, 5) ➞ [13, 13, 13, 13, 13]
*/

let repeat = (element, times) => {
	let a = [];
	for (let i = 0; i < times; i++) {
		a.push(element);
	}
	return a;
}

/* (20)
Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
"apples and bananas".vreplace("u") ➞ "upplus und bununus"
*/

String.prototype.vreplace = function(vowel) {
	let vowels = ["a", "e", "i", "o", "u"];
	let newString = "";

	for (let i = 0; i < this.length; i++) {
		if (vowels.includes(this[i])) {
			newString = newString.concat(vowel);
		} else {
			newString = newString.concat(this[i]);
		}
	}
	return newString;
}

/* (21)
Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
*/

let findNemo = s => {
	let pos = s.search("Nemo");
	if (pos == -1) "No se encontró a Nemo!";
	let wordsCount = 0;
	for (let i = 0; i <= pos; i ++) {
		if (s[i] == " ") wordsCount++;
	}
	return `¡Encontré a Nemo en ${wordsCount + 1}!`
}

/* (22)
 Cree una función que capitalice la última letra de cada palabra.
capLast("hello") ➞ "hellO"
*/

let capLast = word => word.slice(0,-1).concat(word.slice(-1).toUpperCase());

console.log(capLast("hello"));
