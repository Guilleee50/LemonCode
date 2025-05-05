console.log("************** DELIVERABLE 03 *********************");
// 3. CLONE MERGE
// Ejercicio 3.1
function clone(source) {
    return {...source};
}
console.log(clone({ name: "Maria", surname: "Ibañez", country: "SPA" }));


// Ejercicio 3.2
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
    return {...source, ...target};
}
console.log(merge(a, b));