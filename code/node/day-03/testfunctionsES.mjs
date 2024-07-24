// const functions = require('./functions.cjs');

import * as functions from './functionsES.mjs';

// import { convertToUppercase } from './functionsES.mjs';

let name = "Pedro Remoaldo";
let result = functions.convertToUppercase(name);
// let result = convertToUppercase(name);
console.log(result);

// console.log(functions.PI); // undefined