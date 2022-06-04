"use strict";

//  Программа выводит имя приветсвие Администратора
//  Ввод имени через переменную {inputName}
//  Вывод ранее присвоеного омени через переменную {administratorName}


const inputName = prompt('Введите имя администратора', 'Login: ');
const lesson1_task1_administratorName = inputName;

console.log (inputName);
document.write('Приветствую Вас администратор: ' + inputName + '.');