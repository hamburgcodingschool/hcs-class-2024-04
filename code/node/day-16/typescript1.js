// let fullName: string;
// fullName = "Pedro";
// :string is a type annotation - defines the type of data that is allowed in the variable
var fullName = "Pedro";
console.log(fullName);
// fullName = 4; // Type 'number' is not assignable to type 'string'.
fullName = "Usha";
var year = 2025;
var married = true;
var students = ["Usha", "Jasmina", "Bhagyashree"];
console.log(students);
// let students2: string[] = ["Usha", "Jasmina", 4]; // Type 'number' is not assignable to type 'string'.
var students2 = ["Usha", "Jasmina", "Bhagyashree"];
var students3 = ["Usha", "Jasmina", "Bhagyashree"];
// general type annotation
// any means we don't know beforehand which will be the type of the variable
var anotherVariable;
anotherVariable = "Test";
anotherVariable = 4;
var nonExistingVariable = undefined;
var nullVariable = null;
// type unions - or operator
var multipleTypes;
multipleTypes = undefined;
multipleTypes = "Test";
// multipleTypes = 34; // Type 'number' is not assignable to type 'string'
// type annotations are optional because of type inference - this means that TypeScript can infere the type of variable by looking at the corresponding value
var city = "Hamburg"; // TypeScript inference = let city: string
// functions
function addNumbers(value1, value2) {
    // Parameter 'value1' implicitly has an 'any' type.
    return value1 + value2;
}
console.log(addNumbers("P", "E")); // PE
function addNumbers2(value1, value2) {
    return value1 + value2;
}
// console.log(addNumbers2("P", "E")); // Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(addNumbers2(7, 3)); // 10
