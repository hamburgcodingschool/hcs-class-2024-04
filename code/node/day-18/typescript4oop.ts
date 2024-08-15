import { Person, Student } from './person';

let person1 = new Person("Bhagyashree", 21);
console.log(person1.name);
console.log(person1.info());

let student1 = new Student("Jasmina", 22, 3456, "TypeScript");
console.log(student1.name);
console.log(student1.course);
console.log(student1.info());
// Property 'walk' is protected and only accessible within class 'Student' and its subclasses
// console.log(student1.walk());
console.log(student1.areYouWalking());

