"use strict";

const successfullyEnrolled = 'успешно зачислена.';
const selectionOptionSum = 'Выбраная из вариантов сумма в';
const selectionSum = 'Выбраная из вариантов сумма в';

const replenishmentAmount = prompt('Выбирите сумму пополнения ( 101 руб., 10020 руб. или 120104 руб.', '');
// проверка на валидность replenishmentAmount

/**
 * Определяет падеж валюты
 * @param amountMoney
 * @returns Правильная падежная форма рубля
 */
const getCurrency = (amountMoney) => {
    const lastSymbol = amountMoney[amountMoney.length - 1];
    //const lastDigital = getMoney % 10;

    if (lastSymbol > 0 && lastSymbol <= 1) {
        return 'рубль';
    } else if (lastSymbol > 1 && lastSymbol < 5) {
        return 'рубля';
    } else {
        return 'рублей';
    }
}

/**
 * Выводит зачисленную сумму
 * @param amountMoney
 */
const getMoneyToDeposit = (amountMoney) => { // amountMoney = '100500'
    const currency = getCurrency(amountMoney);
    const isCustomMoney = amountMoney === 101 || amountMoney === 10020 || amountMoney === 120104;

    switch (true) {
        case isCustomMoney:
            console.log(`${selectionOptionSum} ${amountMoney} ${currency}. ${successfullyEnrolled}`);
            break;
        default:
            console.log(`${selectionSum} ${amountMoney} ${currency}. ${successfullyEnrolled}`);
    }
}

if (!Number.isNaN(+replenishmentAmount)) {
    getMoneyToDeposit(replenishmentAmount);
}