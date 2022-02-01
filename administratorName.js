"use strict";

//  Программа выводит имя приветсвие Администратора
//  Ввод имени через переменную {inputName}
//  Вывод ранее присвоеного омени через переменную {administratorName}


const inputName = prompt('Введите имя администратора', 'Login: ');
const administratorName = inputName;

console.log (administratorName);
document.write('Приветствую Вас администратор: ' + administratorName + '.');