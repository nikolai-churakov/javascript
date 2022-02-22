"use strict";

/**
 *  Цикл выводит ряд значений от 0 до 10
 * @type {string}
 */
let result = '';
let i = 0;

do {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    }
    if (i % 2) {
        console.log(`${i} - это нечетное`);
    } else if ( i !==0) {
        console.log(`${i} - это четное`);
    }
    result = result + i;
    i++;
} while (i < 11);

