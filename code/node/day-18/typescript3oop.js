"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var people_1 = require("./people");
var person1 = new people_1.People("Usha", 25, true, 12345);
console.log(person1.name);
// person1.incrementTotalInstancesCreated();
var person2 = new people_1.People("Bhagyashree", 21, true, 678910);
console.log(person2.name);
// person2.incrementTotalInstancesCreated();
// console.log("Total of instances created: " + person1.totalInstancesCreated);
console.log("Total of instances created: " + people_1.People.totalInstancesCreated);
console.log(person2.vatNumber);
person2.age = 25;
console.log(person2.age);
try {
    // if (value ...)
    person2.vatNumber = 2500000000000000;
}
catch (error) {
    console.log("ERROR");
}
console.log(person1.country);
console.log(person2.country);
// person1.country = "India"; // Cannot assign to 'country' because it is a read-only property.
var person3 = new people_1.People("Jasmina", 22, true, 782162);
// person3.incrementTotalInstancesCreated();
console.log("Total of instances created: " + people_1.People.totalInstancesCreated);
// People.totalInstancesCreated = 100; // Cannot assign to 'totalInstancesCreated' because it is a read-only property.
// Helper classes / utility library - made of static properties/methods
// tend to be Singletons (design pattern) - they can only be instantiated once - can not create objects
console.log(Math.ceil(2.4));
console.log(Math.PI);
