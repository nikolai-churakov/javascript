"use strict";

// Урок 2, задание 3.
// Объявить две переменные a и b и задать им целочисленные произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
// - если a и b положительные, вывести их разность (ноль можно считать положительным числом);
// - если а и b отрицательные, вывести их произведение;
// - если а и b разных знаков, вывести их сумму;

const getUsersNumbers = (count = 1) => {
    const firstNumber = +prompt('Ведите целое значение ПЕРВОЙ переменной','');
    const secondNumber = +prompt('Ведите целое значение ВТОРОЙ переменной','');

    if (
        (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) &&
        count < 2
    ) {
        count = count + 1;
        console.log('Введено не верное значание. Введите ЦЕЛОЕ ЧИСЛО')
        getUsersNumbers(count);
    } else if (count === 2) {
        return;
    }
    return {firstNumber, secondNumber};
}

const numberComparison = () => {
    const {firstNumber, secondNumber} = getUsersNumbers();

    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber) ) {
        // if (firstNumber && secondNumber) {
        return;
    }

    if (firstNumber > 0 && secondNumber > 0) {
        console.log('A+ and B+.  Разность значений = ' + `${firstNumber - secondNumber}`);
    } else if (firstNumber < 0 && secondNumber < 0) {
        console.log('A- and B-.  Произведений переменных = ' + `${firstNumber - secondNumber}`);
    } else {
        console.log('значения А и B имеют разыне знаки. Сумма переменных = ' + `${firstNumber - secondNumber}`);
    }
}
numberComparison();