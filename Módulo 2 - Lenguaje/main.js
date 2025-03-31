// Array utilizada en los ejercicios
let arr = [1, 2, 3, 4, 5];

//Ejercicio 1
const head = ([num]) => {console.log("Ejercicio 1: " +  num)};
head(arr);

//Ejercicio 2
const tail = ([num1, ...args]) => {console.log("Ejercicio 2: " +  args)};
tail(arr);

//Ejercicio 3
const init = (arr) => {console.log("Ejercicio 3: " +  arr.slice(0, arr.length-1))};
init(arr);

//Ejercicio 4
const last = ([...args]) => {console.log("Ejercicio 4: " +  args.at(-1))};
last(arr);

// Ejercicio 5
const concat = (a, ...b) => {console.log("Ejercicio 5: " +  a.concat(b))};
concat(arr, [6, 7, 8, 9, 10]);

// Ejercicio 5.1
const concat2 = () => {};
