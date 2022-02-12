"use strict";

// Урок 2 задание  4
// Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами.
// Обязательно использовать оператор return.

const firstValue = 6;
const secondValue = 2;

/**
 * Функция сложения
 * @param firstNumber
 * @param secondNumber
 * @returns Сумму двух чисел
 */
const addition = (firstNumber, secondNumber) => firstNumber + secondNumber;

addition(firstValue, secondValue);

/**
 * Функция вычитания
 * @param firstNumber
 * @param secondNumber
 * @returns Разность двух значений
 */
const subtraction = (firstNumber, secondNumber) => firstNumber - secondNumber;

subtraction(firstValue, secondValue);

/**
 * Функция деления
 * @param firstNumber
 * @param secondNumber
 * @returns {number}
 */
const division = (firstNumber, secondNumber) => firstNumber / secondNumber;

division(firstValue, secondValue);

/**
 * Функция умножения
 * @param firstNumber
 * @param secondNumber
 * @returns {number}
 */
const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;

multiply(firstValue, secondValue)