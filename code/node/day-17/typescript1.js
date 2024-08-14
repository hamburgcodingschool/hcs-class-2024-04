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
// function addNumbers(value1, value2) {
// Parameter 'value1' implicitly has an 'any' type.
function addNumbers(value1, value2) {
    return value1 + value2;
}
console.log(addNumbers("P", "E")); // PE
// function that returns a number
function addNumbers2(value1, value2) {
    // return value1 + value2 + "03"; // Type 'string' is not assignable to type 'number'
    return value1 + value2;
}
// console.log(addNumbers2("P", "E")); // Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(addNumbers2(7, 3)); // 10
// void means the function does not return anything
function showName(name) {
    console.log(name);
}
showName("Pedro Remoaldo");
// Property 'married' is missing in type '{ name: string; age: number; }' but required in type 'Person'.
var person1 = {
    name: "Usha",
    age: 25,
    married: true,
    // country: "India"
    // if country was not optional we would get the following error:
    // Object literal may only specify known properties, and 'country' does not exist in type 'Person'.
};
var person2 = {
    name: "Bhagyashree",
    age: 25,
    married: true,
    country: "India"
};
var student1 = {
    name: "Usha",
    age: 25,
    // Type '{}' is missing the following properties from type 'Address': street, city, postalCode, country
    address: {
        street: "Flower Street, 23",
        city: "Bangalore",
        postalCode: "12345 Bangalore",
        country: "India"
    },
    contacts: [12345678, 123123123]
};
console.log(student1);
console.log("teste");
