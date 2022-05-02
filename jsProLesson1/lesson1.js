"use strict"

//ES5
/**
 * Объект ООП
 * @param name
 * @param yearOfBirth
 * @constructor
 */
function Person (name, yearOfBirth) {
    this.name =  name;
    this.yearOfBirth = yearOfBirth;
}

Person.prototype.calcAge =  function () {
    return console.log(new Date().getFullYear() - this.yearOfBirth)
};

let Nick = new  Person('Nick', 1987);
let Ann = new Person ('Ann', 1991);
