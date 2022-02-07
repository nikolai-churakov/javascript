"use strict";

// Урок 2, задание 3.
// Объявить две переменные a и b и задать им целочисленные произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
// - если a и b положительные, вывести их разность (ноль можно считать положительным числом);
// - если а и b отрицательные, вывести их произведение;
// - если а и b разных знаков, вывести их сумму;

const getUsersNumbers = () => {
    const firstNumber = +prompt('Ведите целое значение ПЕРВОЙ переменной','');
    const secondNumber = +prompt('Ведите целое значение ВТОРОЙ переменной','');
    if (Number.isNaN(firstNumber) && Number.isNaN(firstNumber)) {
        console.log('Введено не верное значание. Введите ЦЕЛОЕ ЧИСЛО');
        getUsersNumbers();
    }
    // if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
    //     console.log('Введите цифровое значение');
    //     getUsersNumbers();
    return {firstNumber, secondNumber};
}

const numberComparison = () => {
    const {firstNumber, secondNumber} = getUsersNumbers();

    if (firstNumber > 0 && secondNumber > 0) {
        console.log('A+ and B+.  Разность значений = ' + `${firstNumber - secondNumber}`);
    } else if (firstNumber < 0 && secondNumber < 0) {
        console.log('A- and B-.  Произведений переменных = ' + `${firstNumber - secondNumber}`);
    } else {
        console.log('значения А и B имеют разыне знаки. Сумма переменных = ' + `${firstNumber - secondNumber}`);
    }
}
numberComparison();