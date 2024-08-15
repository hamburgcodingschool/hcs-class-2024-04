"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.info = function () {
        return "".concat(this.name, " is ").concat(this.age, " years old");
    };
    // in this class walk is a "private" method
    Person.prototype.walk = function () {
        console.log("Walking");
    };
    return Person;
}());
exports.Person = Person;
// inheritance
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    // Constructors for derived classes must contain a 'super' call.
    function Student(name, age, student_id, course) {
        var _this = _super.call(this, name, age) || this;
        _this.name = name;
        _this.age = age;
        _this.student_id = student_id;
        _this.course = course;
        return _this;
    }
    // method override
    Student.prototype.info = function () {
        // return `${this.name} is ${this.age} years old and is attending ${this.course} classes`;
        return "".concat(_super.prototype.info.call(this), " and is attending ").concat(this.course, " classes");
        // return super.info() + ' and is attending ' + this.course + ' classes';
    };
    Student.prototype.walk = function () {
        _super.prototype.walk.call(this);
        console.log("Walking like a student");
    };
    Student.prototype.areYouWalking = function () {
        this.walk();
    };
    return Student;
}(Person));
exports.Student = Student;
