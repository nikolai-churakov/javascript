"use strict"

//ES5
function Person (name, yearOfBirth) {
    this.name =  name;
    this.yearOfBirth = yearOfBirth;
}

Person.prototype.calcAge =  function () {
    return console.log(new Date().getFullYear() - this.yearOfBirth)
};

Person.prototype.lastName = 'Smith';

function Teacher (name, yearOfBirth, subject) {
    Person.call(name, yearOfBirth);
    this.subject = subject;
}

let Nick = new  Person('Nick', 1987);
let Ann = new Teacher ('Ann', 1991, 'math');

