// const functions = require('./functions.cjs');
const { convertToUppercase } = require('./functions.cjs');

let name = "Pedro Remoaldo";
// let result = functions.convertToUppercase(name);
let result = convertToUppercase(name);
console.log(result);

// console.log(functions.PI); // undefined