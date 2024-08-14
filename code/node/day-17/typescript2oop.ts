// Class - blueprint to create objects

class People {
    // properties - variables
    // by default, all properties are public
    name: string;
    // name: string;
    // Property 'name' has no initializer and is not definitely assigned in the constructor.
    // possible solution
    // name: string = "Pedro";
    // you can define a property as public, bnut thgat is not necessary, because, by default all properties are public
    public age: number;
    married: boolean;
    // a private property is only accessed inside the class
    private vatNumber: number;

    // a constructor is a special method inside a class used for initializing an object
    constructor(name: string, age: number, married: boolean, vatNumber: number) {
        // this keyword references the class
        this.name = name;
        this.age = age;
        this.married = married;
        this.vatNumber = vatNumber;
    }

    // methods - functions
    info(): string {
        return `${this.name} is ${this.age} years old and is${this.married ? ' ' : ' not '}married.`
    }

    walk(): void {
        console.log("Walking");
    }
}

// create an instance of a class - object
let person1 = new People("Usha", 25, true, 12345);
console.log(person1.name);
console.log(typeof person1); // object
let person2 = new People("Bhagyashree", 21, true, 678910);
console.log(person2.name);
// console.log(person2.country); // Property 'country' does not exist on type 'People'.

console.log(person1 instanceof People); // true

// determining if a property exists inside an object
console.log('name' in person1); // true
console.log('country' in person1); // false

console.log(person1.hasOwnProperty('name')); // true
console.log(person1.hasOwnProperty('country')); // false

console.log(person1.info());

// public properties can be accessible/changed from outside of the class
person1.age = 27;
console.log(person1.age);
// private properties can't be accessed/changed from outside of the class
// person1.vatNumber = 12342; // Property 'vatNumber' is private and only accessible within class 'People'.
// console.log(person1.vatNumber); // Property 'vatNumber' is private and only accessible within class 'People'.

// invoke the walk method
person1.walk();