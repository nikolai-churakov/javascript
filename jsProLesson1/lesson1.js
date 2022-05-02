"use strict"

//ES5

function Person (name, yearOfBirth) {
    this.name =  name;
    this.calcAge = function () {
        return console.log(new Date() - this.yearOfBirth)
    }
}



//
// let person = {
//     name: name,
//     yearOfBirth: yearOfBirth,
// };