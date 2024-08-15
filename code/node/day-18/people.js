"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.People = void 0;
var People = /** @class */ (function () {
    // parameter properties
    function People(name, age, married, _vatNumber) {
        this.name = name;
        this.age = age;
        this.married = married;
        this._vatNumber = _vatNumber;
        // name: string;
        // age: number;
        // married: boolean;
        // private vatNumber: number;
        this.country = "Germany";
        // this.name = name;
        // this.age = age;
        // this.married = married;
        // this.vatNumber = vatNumber;
        People._totalInstancesCreated++;
    }
    People.prototype.info = function () {
        return "".concat(this.name, " is ").concat(this.age, " years old and is").concat(this.married ? ' ' : ' not ', "married.");
    };
    People.prototype.walk = function () {
        console.log("Walking");
    };
    Object.defineProperty(People.prototype, "vatNumber", {
        // getter
        get: function () {
            return this._vatNumber;
        },
        // setter
        set: function (value) {
            if (value < 100000000 || value > 999999999) {
                throw new Error('Invalid value');
            }
            else {
                this._vatNumber = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(People, "totalInstancesCreated", {
        get: function () {
            return People._totalInstancesCreated;
        },
        enumerable: false,
        configurable: true
    });
    // property that belongs to the class and not to the instantiated objects
    People._totalInstancesCreated = 0;
    return People;
}());
exports.People = People;
