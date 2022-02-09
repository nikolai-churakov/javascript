"use strict";

// Урок 2 задание 5
// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических операций
// (использовать функции из задания 4) и вернуть полученное значение.

function mathOperation () {
    const operation = prompt('Выбирите операцию: multiply / divide / reduce / add', '');
    const firstNumber = +prompt('Ведите целое значение ПЕРВОЙ переменной', '');
    const secondNumber = +prompt('Ведите целое значение ВТОРОЙ переменной', '');

    switch (operation) {
        case "multiply":
            console.log('Произведение значений = ' + `${firstNumber * secondNumber}`);
            return (firstNumber - secondNumber);
        case "divide":
            console.log('Частное значений = ' + `${firstNumber / secondNumber}`);
            return (firstNumber - secondNumber);
        case "reduce":
            console.log('Разность значений = ' + `${firstNumber - secondNumber}`);
            return (firstNumber - secondNumber);
        case "add":
            console.log('Сумма значений = ' + `${firstNumber + secondNumber}`);
            break;
        default:
            console.log("Вы ввели не верную операцию " + operation + ".  Выбирите из multiply / divide / reduce / add");
    }
}
mathOperation();