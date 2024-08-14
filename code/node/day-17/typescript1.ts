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
// function addNumbers(value1, value2) {
// Parameter 'value1' implicitly has an 'any' type.
function addNumbers(value1: any, value2: any) {
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

// void means the function does not return anything
function showName(name: string): void {
    console.log(name);
}
showName("Pedro Remoaldo");

// defining types - type alias
type Person = {
    name: string,
    age: number,
    married: boolean,
    country?: string // ? means optional
}

// Property 'married' is missing in type '{ name: string; age: number; }' but required in type 'Person'.

let person1: Person = {
    name: "Usha",
    age: 25,
    married: true,
    // country: "India"
    // if country was not optional we would get the following error:
    // Object literal may only specify known properties, and 'country' does not exist in type 'Person'.
}

let person2: Person = {
    name: "Bhagyashree",
    age: 25,
    married: true,
    country: "India"
}


type Address = {
    street: string,
    city: string,
    postalCode: string,
    country: string
}
type Student = {
    name: string,
    age: number,
    address: Address,
    contacts: number[]
}

let student1: Student = {
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
}
console.log(student1);