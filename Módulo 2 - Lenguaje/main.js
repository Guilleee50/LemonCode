// Array utilizada en los ejercicios
let arr = [1, 2, 3, 4, 5];



// 1. ARRAY OPERATIONS
//Ejercicio 1.1
const head = ([num]) => {console.log("Ejercicio 1.1: " +  num)};
head(arr);

//Ejercicio 1.2
const tail = ([num1, ...args]) => {console.log("Ejercicio 1.2: " +  args)};
tail(arr);

//Ejercicio 1.3
const init = (arr) => {console.log("Ejercicio 1.3: " +  arr.slice(0, arr.length-1))};
init(arr);

//Ejercicio 1.4
const last = ([...args]) => {console.log("Ejercicio 1.4: " +  args.at(-1))};
last(arr);



// CONCAT
// Ejercicio 2.1
const concat = (a, ...b) => {console.log("Ejercicio 2.11: " +  a.concat(b))};
concat(arr, [6, 7, 8, 9, 10]);

// Ejercicio 2.2
const concat2 = () => {};



// 3. CLONE MERGE
// Ejercicio 3.1