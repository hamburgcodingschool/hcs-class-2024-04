export class People {
    // name: string;
    // age: number;
    // married: boolean;
    // private vatNumber: number;
    readonly country: string = "Germany";
    // property that belongs to the class and not to the instantiated objects
    private static _totalInstancesCreated: number = 0;

    // parameter properties
    constructor(public name: string, public age: number, private married: boolean, private _vatNumber: number) {
        // this.name = name;
        // this.age = age;
        // this.married = married;
        // this.vatNumber = vatNumber;
        People._totalInstancesCreated++;
    }

    info(): string {
        return `${this.name} is ${this.age} years old and is${this.married ? ' ' : ' not '}married.`
    }

    walk(): void {
        console.log("Walking");
    }

    // getter
    get vatNumber() {
        return this._vatNumber;
    }

    // setter
    set vatNumber(value: number) {
        if (value < 100000000 || value > 999999999) {
            throw new Error('Invalid value');
        } else {
            this._vatNumber = value;
        }
    }

    static get totalInstancesCreated() {
        return People._totalInstancesCreated;
    }

    // incrementTotalInstancesCreated() {
    //     People.totalInstancesCreated++;
    // }

}