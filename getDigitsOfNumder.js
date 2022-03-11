'use strict';

const number = `123`;

/**
 *
 * @param number
 * @returns {{"Значание содержит ЕДИНИЦ": number, "Значание содержит ДЕСЯТКОВ": number, "Значание содержит СОТЕН": number}}
 */
const getDigitsOfNumber = (number) => {
    let objNumber = {};
    if (number <= 9) {
        objNumber["Значание содержит ЕДИНИЦ"] = number;
    } else if (number <= 999) {
        objNumber["Значание содержит ЕДИНИЦ"] = Math.floor(number % 10);
        objNumber["Значание содержит ДЕСЯТКОВ"] = Math.floor(number / 10 % 10);
        objNumber["Значание содержит СОТЕН"] = Math.floor(number / 100 % 10);
    } else {
        console.log('Вы ввели число за диапазоном 0 - 999');
    }
    return objNumber;
};

getDigitsOfNumber (+number);


// var max = 999;
// var digit = {
//     number: Math.round(Math.random() * max), /*запрос у пользователя +prompt('Введите число от 0 до 999'),*/
//     units: 0,
//     tens: 0,
//     hundreds: 0,
// };
// if (digit.number <= 9){
//     digit.units = digit.number;
// } else if (digit.number <= 999){
//     digit.units = Math.floor(digit.number % 10);
//     digit.tens = Math.floor(digit.number / 10 % 10);
//     digit.hundreds = Math.floor(digit.number / 100 % 10);
// }else {
//     digit.number = 0;
//     console.log('Вы ввели число за диапазоном 0 - 999');
// }
// console.log(digit);


// 'use strict';
// const replenishmentAmount = prompt("Введите целое число от 0 до 999.` + `\n`  + `Для выхода нажмите -1.`, ``);
// const errorNumberExit = 'Выход из функции.';
// const errorNumberNotIntegerOrIsNaN = 'Число введене НЕВЕРНО.';
// /**
//  * Переводит целое числов в объект. Помещая в свойства числа по порядкам.
//  * @returns {{"Значание содержит ЕДИНИЦ": string, "Значание содержит ДЕСЯТКОВ": string, "Значание содержит СОТЕН": string}|*}
//  */
// const getDigitsOfNumber = (number) => {
//     if (number === '-1') {
//         return alert(`${errorNumberExit}`);
//     }
//     let arrNumber = number.split('', 3);
//     if (arrNumber.length < 3 && arrNumber.length !== 1) {
//         arrNumber.unshift('0');
//     } else if (arrNumber.length < 2) {
//         arrNumber.unshift('0', '0');
//     }
//
//     let objNumber = {
//         "Значание содержит ЕДИНИЦ": arrNumber[2],
//         "Значание содержит ДЕСЯТКОВ": arrNumber[1],
//         "Значание содержит СОТЕН": arrNumber[0],
//     };
//     console.log(objNumber);
//     return objNumber;
// };
//
// if (!Number.isInteger(+replenishmentAmount) || Number.isNaN(replenishmentAmount)) {
//     alert(` ${errorNumberNotIntegerOrIsNaN}`);
//
// } else {
//
// }
//     getDigitsOfNumber(+replenishmentAmount);