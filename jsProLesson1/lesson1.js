"use strict"

//ES5
// function Person (name, yearOfBirth) {
//     this.name =  name;
//     this.yearOfBirth = yearOfBirth;
// }
//
// Person.prototype.calcAge =  function () {
//     console.log(new Date().getFullYear() - this.yearOfBirth)
// };
//
// Person.prototype.lastName = 'Smith';
//
// function Teacher(name, yearOfBirth, subject) {
//     Person.call(this, name, yearOfBirth);
//     this.subject = subject;
// }
//
// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;
//
// let Nick = new  Person('Nick', 1987);
// let Ann = new Teacher('Ann', 1991, 'math');

//ES6

class Person {
    constructor(name, yearOfBirth) {
        this.name =  name;
        this.yearOfBirth = yearOfBirth;
    }
    calcAge() {
        console.log(new Date().getFullYear() - this.yearOfBirth);
    }
    sayHi(){
        return `${this.name}  says hi`;
    }
    static triple(x) {
        if (x === undefined) {
            x =2;
        }
        return x * 3
    }
}

class Teacher extends Person {
    constructor(name, yearOfBirth, subject) {
        super(name, yearOfBirth); // Вызов конструктора родителя
        this.subject = subject;
    }
    sayHi() {
        return `${super.sayHi()} as teacher`;
    }
}

let nick = new Person('Nick', 1987);
let ann = new Teacher('Ann', 1991, 'math');
console.log(Teacher.triple(6));
