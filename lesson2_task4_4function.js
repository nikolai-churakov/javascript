"use strict";

// Урок 2 задание 4
// Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами.
// Обязательно использовать оператор return.

const firstNumber = 6;
const secondNumber = 2;

//  Функция суммы.
function add ()
{
    console.log('Сумма значений = ' + `${firstNumber + secondNumber}`);
    return (firstNumber + secondNumber);
}
add();


//  * Функция вычитания.
function reduce ()
{
    console.log('Сумма значений = ' + `${firstNumber - secondNumber}`);
    return (firstNumber - secondNumber);
}
reduce();


//  * Функция деления.
function divide ()
{
    console.log('Сумма значений = ' + `${firstNumber / secondNumber}`);
    return (firstNumber / secondNumber);
}
divide();


//  * Функция умножения.
function multiply ()
{
    console.log('Сумма значений = ' + `${firstNumber * secondNumber}`);
    return (firstNumber * secondNumber);
}
multiply();
