'use strict';

const getDigitsOfNumber = () => {
    const number = prompt(`Введите целое число от 0 до 999.` + `\n`  + `Для выхода нажмите -1.`, ``);

    if (number === '-1') {
        return alert('Выход из функции.');
    }

    let arrNumber = number.split('', 3);

    if (arrNumber.length < 3 && arrNumber.length !== 1) {
        arrNumber.unshift('0');
    } else if (arrNumber.length < 2) {
        arrNumber.unshift('0', '0');
    }

    let objNumber = {
        "Значание содержит ЕДИНИЦ": arrNumber[2],
        "Значание содержит ДЕСЯТКОВ": arrNumber[1],
        "Значание содержит СОТЕН": arrNumber[0],
    };
    console.log(objNumber);
    return objNumber;
};

getDigitsOfNumber();