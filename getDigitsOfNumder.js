'use strict';

const replenishmentAmount = prompt(`Введите целое число от 0 до 999.` + `\n`  + `Для выхода нажмите -1.`, ``);
const errorNumberExit = 'Выход из функции.';
const errorNumberNotIntegerOrIsNaN = 'Число введене НЕВЕРНО.';

const getDigitsOfNumber = () => {
    const number = replenishmentAmount;

    if (number === '-1') {
        return alert(`${errorNumberExit}`);
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

if (!Number.isInteger(+replenishmentAmount) || Number.isNaN(replenishmentAmount)) {
    alert(` ${errorNumberNotIntegerOrIsNaN}`);

} else {
    getDigitsOfNumber(replenishmentAmount);
}
