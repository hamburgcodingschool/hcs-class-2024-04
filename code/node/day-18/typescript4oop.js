"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var person1 = new person_1.Person("Bhagyashree", 21);
console.log(person1.name);
console.log(person1.info());
var student1 = new person_1.Student("Jasmina", 22, 3456, "TypeScript");
console.log(student1.name);
console.log(student1.course);
console.log(student1.info());
// Property 'walk' is protected and only accessible within class 'Student' and its subclasses
// console.log(student1.walk());
console.log(student1.areYouWalking());
