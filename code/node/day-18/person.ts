export class Person {
    constructor(public name: string, public age: number) {

    }

    info(): string {
        return `${this.name} is ${this.age} years old`;
    }

    // in this class walk is a "private" method
    protected walk(): void {
        console.log("Walking");
    }
}

// inheritance
export class Student extends Person {
    // Constructors for derived classes must contain a 'super' call.
    constructor(public name: string, public age: number, public student_id: number, public course: string) {
        super(name, age);
    }

    // method override
    override info(): string {
        // return `${this.name} is ${this.age} years old and is attending ${this.course} classes`;
        return `${super.info()} and is attending ${this.course} classes`;
        // return super.info() + ' and is attending ' + this.course + ' classes';
    }

    protected override walk() {
        super.walk();
        console.log("Walking like a student");
    }

    public areYouWalking() {
        this.walk();
    }
}