"use strict";

// Дано натуральное число n. Напишите рекурсивную функцию, которая возвращает строку чисел от 1 до n, разделенных space.
// test script
let n = 12;
function my_recursive (n) {
    if (n>0) {
        my_recursive(n-1);
        document.write(n + ' ');
    }
}
function my_function(n) { return n <= 1 ? 1 : my_function(n - 1) + ' ' + n; }
console.log(my_function(9));

let z = 12;
let x = 13;
let max = (x > z) ? x : y;
alert(max);

let age = 29;
let status = (age >= 18) ? "adult" : "minor";
console.log(status);