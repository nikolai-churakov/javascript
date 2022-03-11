'use strict';

const number = prompt(`Введите целое число от 0 до 999.` + `\n`  + `Для выхода нажмите -1.`, ``);
const errorNumberExit = 'Выход из функции.';
const errorNumberNotIntegerOrIsNaN = 'Число введене НЕВЕРНО.';


/**
 * Переводит целое числов в объект. Помещая в свойства числа по порядкам.
 * @returns {{"Значание содержит ЕДИНИЦ": string, "Значание содержит ДЕСЯТКОВ": string, "Значание содержит СОТЕН": string}|*}
 */
const getDigitsOfNumber = (number) => {

    if (number === '-1') {
        return alert(`${errorNumberExit}`);
    }

    let arrNumber = number.split('', 3);

    if (arrNumber.length < 3 && arrNumber.length !== 1) {
        arrNumber.unshift('0');
    } else if (arrNumber.length < 2) {
        arrNumber.unshift('0', '0');
    }
};

if (!Number.isInteger(+number) || Number.isNaN(number)) {
    alert(` ${errorNumberNotIntegerOrIsNaN}`);

} else {
    getDigitsOfNumber(+number);
}

// const getDigitsOfNumber = (number) => {
//     return {
//         firstNumber: 0,
//         secondNumber: 1,
//         thirdNumber: 3
//     }
// };