"use strict";

// Дано натуральное число n. Напишите рекурсивную функцию, которая возвращает строку чисел от 1 до n, разделенных space.
// test script

function my_recursive (n) {
    if (n>0) {
        my_recursive(n-1);
        document.write(n + ' ');
    }
}