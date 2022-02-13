"use strict";

// Урок 2 задание  5
// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических операций
// (использовать функции из задания 4) и вернуть полученное значение.

const operation = prompt('Выбирите операцию: multiply / divide / reduce / add', '');
const firstNumber = +prompt('Ведите целое значение ПЕРВОЙ переменной', '');
const secondNumber = +prompt('Ведите целое значение ВТОРОЙ переменной', '');

/**
 * Функция сложения
 * @param firstNumber
 * @param secondNumber
 * @returns Сумму двух чисел
 */
const addition = (firstNumber, secondNumber) => firstNumber + secondNumber;

/**
 * Функция вычитания
 * @param firstNumber
 * @param secondNumber
 * @returns Разность двух значений
 */
const subtraction = (firstNumber, secondNumber) => firstNumber - secondNumber;

/**
 * Функция деления
 * @param firstNumber
 * @param secondNumber
 * @returns Частное двух чисел
 */
const division = (firstNumber, secondNumber) => firstNumber / secondNumber;

/**
 * Функция умножения
 * @param firstNumber
 * @param secondNumber
 * @returns Произведение двух чисел
 */
const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;

/**
 * Функция четырех мат. операций addition / subtraction / division / multiply
 * @param firstArg
 * @param secondArg
 * @param operationName
 * @returns Результат мат. операции в зависимости от operationName
 */
const mathOperation = (firstArg, secondArg, operationName) => {
    switch (operationName) {
        case "multiply":
            return multiply(firstArg, secondArg);
        case "subtraction":
            return subtraction(firstArg, secondArg);
        case "division":
            return division(firstArg, secondArg);
        case "addition":
            return addition(firstArg, secondArg);
    }
}

const isNumbersNaN = Number.isNaN(firstNumber) || Number.isNaN(secondNumber);
const isOperationNameNotValid = operation !== 'multiply' && operation  !== 'subtraction' && operation  !== 'division' && operation  !== 'addition';

if (!isNumbersNaN && !isOperationNameNotValid) {
    console.log(mathOperation(firstNumber, secondNumber, operation));
}