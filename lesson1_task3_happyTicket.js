"use strict";

//  Скрипт определяет является ли введенный 6 значный номер билета выйгрышным.
//  Счастливый билет - билет, у которого сумма первых трех цифр равна сумме последних трех цифр номера билета.

const ticketNumber = prompt('Введите шести значный номер вашего билета', '');

let a = Math.floor(ticketNumber/100000); // первый символ 6 значного номера

let bSum = ticketNumber - a * 100000; //
let b = Math.floor(bSum / 10000); // второй символ 6 значного номера

let cSum = bSum - b * 10000; //
let c = Math.floor(cSum/1000); // третий символ 6 значного номера

let dSum = cSum - c * 1000; //
let d = Math.floor(dSum / 100); // четвертый символ 6 значного номера

let eSum = dSum - d * 100; //
let e = Math.floor(eSum / 10); // пятый символ 6 значного номера

let fSum = eSum - e * 10; //
let f =  Math.floor(fSum ); //шестой символ 6 значного номера

let totalFirstThreeNumberTicket = a + b + c;
let totalLastThreeNumberTicket = d + e + f;

console.log(totalFirstThreeNumberTicket);
console.log(totalLastThreeNumberTicket);

if (totalFirstThreeNumberTicket === totalLastThreeNumberTicket) {
    console.log('Ваш билет №' + ticketNumber + '. Счастливый.' + '\n' +
        'Вы ВЫЙГРАЛИ!!!');
    document.write('Ваш билет №' + ticketNumber + '. Счастливый.' + '\n' +
        'Вы ВЫЙГРАЛИ!!!');
    } else {console.log('Вам не повездл. Попробуйте снова.');
            document.write('Вам не повездл. Попробуйте снова.');
}