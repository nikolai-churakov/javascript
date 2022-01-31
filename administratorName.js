"use strict";

//  Программа выводит имя приветсвие Администратора
//  Ввод имени через переменную {inputName}
//  Вывод ранее присвоеного омени через переменную {AdministratorName}

let inputName = prompt('Введите имя администратора', 'Login:');
const AdministratorName = inputName;

console.log (AdministratorName);
document.write('Приветствую Вас администратор: ' + AdministratorName);