"use strict";

const replenishmentAmount = prompt('Выбирите сумму для пополнения ( 101 руб., 10020 руб. или 120104 руб.', '');
// проверка на валидность replenishmentAmount

/**
 *
 * @param amountMoney
 * @return
 */
const getCurrency = (amountMoney) => {
    const lastSymbol = amountMoney[amountMoney.length - 1];

    if (lastSymbol > 0 && lastSymbol <= 1) {
        return 'рубль';
    } else if (lastSymbol > 1 && lastSymbol < 5) {
        return 'рубля';
    } else {
        return 'рублей';
    }
}


const getMoneyToDeposit = (amountMoney) => { // amountMoney = '100500'
    const currency = getCurrency(amountMoney);
    const isCustomMoney = amountMoney === 101 || amountMoney === 10020 || amountMoney === 120104;

    switch (true) {
        case isCustomMoney:
            console.log(`Выбраная из вариантов сумма в ${amountMoney} ${currency} успешно зачислена.`);
            break;
        default:
            console.log(`Ваша сумма в ${amountMoney} ${currency}. Успешно зачислена.`);
    }
}

if (!Number.isNaN(+replenishmentAmount)) {
    getMoneyToDeposit(replenishmentAmount);
}


// Урок 2. Задание 6.
// Программа должна спросить у пользователя количество денег, которое он хочет положить в банк.
// Пользователь должен ввести целое число, а программа должна выдать соответствующее сообщение:
// "Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
// "Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
// "Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
// Если пользователь введет любое другое целое число, программа также должна выдать соответствующее сообщение,
// в котором будет отображено это число, а также поставить верное окончание в слове "рубль".
// Для получения верного склонения слова (любого слова с числом) вам необходимо создать функцию.
