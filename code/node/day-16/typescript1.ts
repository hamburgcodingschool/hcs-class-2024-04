// let fullName: string;
// fullName = "Pedro";
// :string is a type annotation - defines the type of data that is allowed in the variable
let fullName: string = "Pedro";
console.log(fullName);
// fullName = 4; // Type 'number' is not assignable to type 'string'.
fullName = "Usha";

let year: number = 2025;
let married: boolean = true;

let students = ["Usha", "Jasmina", "Bhagyashree"];
console.log(students);
// let students2: string[] = ["Usha", "Jasmina", 4]; // Type 'number' is not assignable to type 'string'.
let students2: string[] = ["Usha", "Jasmina", "Bhagyashree"];
let students3: Array<string> = ["Usha", "Jasmina", "Bhagyashree"];

// general type annotation
// any means we don't know beforehand which will be the type of the variable

let anotherVariable: any;
anotherVariable = "Test";
anotherVariable = 4;

let nonExistingVariable: undefined = undefined;
let nullVariable: null = null;

// type unions - or operator
let multipleTypes: string | undefined;
multipleTypes = undefined;
multipleTypes = "Test";
// multipleTypes = 34; // Type 'number' is not assignable to type 'string'

// type annotations are optional because of type inference - this means that TypeScript can infere the type of variable by looking at the corresponding value
let city = "Hamburg"; // TypeScript inference = let city: string

// functions
function addNumbers(value1, value2) {
    // Parameter 'value1' implicitly has an 'any' type.
    return value1 + value2;
}
console.log(addNumbers("P", "E")); // PE

// function that returns a number
function addNumbers2(value1: number, value2: number): number {
    // return value1 + value2 + "03"; // Type 'string' is not assignable to type 'number'
    return value1 + value2;
}
// console.log(addNumbers2("P", "E")); // Argument of type 'string' is not assignable to parameter of type 'number'.

console.log(addNumbers2(7, 3)); // 10