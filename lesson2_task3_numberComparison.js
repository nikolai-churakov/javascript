"use strict";

// Урок 2, задание 3
// Объявить две переменные a и b и задать им целочисленные произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
// - если a и b положительные, вывести их разность (ноль можно считать положительным числом);
// - если а и b отрицательные, вывести их произведение;
// - если а и b разных знаков, вывести их сумму;

const enterFirstNumber = 'Ведите целое значение ПЕРВОЙ переменной';
const enterSecondNumber = 'Ведите целое значение ВТОРОЙ переменной';
const enterFailNumber = 'Введено не верное значание. Введите ЦЕЛОЕ ЧИСЛО';
const differenceNumber = 'A+ and B+.  Разность значений =';
const workNumber = 'A+ and B+.  Произведение значений =';
const sumNumber = 'A+ and B+.  Cумма значений =';

const getUsersNumbers = (count = 1) => {
    const firstNumber = +prompt(enterFirstNumber,'');
    const secondNumber = +prompt(enterSecondNumber,'');

    if (
        (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) &&
        count < 2
    ) {
        count = count + 1;
        console.log(enterFailNumber);
        getUsersNumbers(count);
    } else if (count === 2) {
        return;
    }
    return {firstNumber, secondNumber};
}

const numberComparison = () => {
    const {firstNumber, secondNumber} = getUsersNumbers();

    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber) ) {
        return;
    }

    if (firstNumber > 0 && secondNumber > 0) {
        console.log(`${differenceNumber} ${firstNumber - secondNumber}`);
    } else if (firstNumber < 0 && secondNumber < 0) {
        console.log(`${workNumber} ${firstNumber * secondNumber}`);
    } else {
        console.log(`${sumNumber} ${firstNumber + secondNumber}`);
    }
}
numberComparison();