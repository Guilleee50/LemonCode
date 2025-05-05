console.log("************** DELIVERABLE 01 *********************");
// Array utilizada en los ejercicios
var arr: number[] = [1, 2, 3, 4, 5];


// 1. ARRAY OPERATIONS
//Ejercicio 1.1
const head = ([num]: number[]) => {console.log("Ejercicio 1.1: " +  num)};
head(arr);

//Ejercicio 1.2
const tail = ([num1, ...args]: number[]) => {console.log("Ejercicio 1.2: " +  args)};
tail(arr);

//Ejercicio 1.3
const init = (arr) => {console.log("Ejercicio 1.3: " +  arr.slice(0, arr.length-1))};
init(arr);

//Ejercicio 1.4
const last = ([...args]) => {console.log("Ejercicio 1.4: " +  args.at(-1))};
last(arr);