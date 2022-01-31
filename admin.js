"use strict";

//  Объявить две переменные: admin и name. Записать в name строку "Василий". Скопировать значение из name в admin.
//  Вывести в консоль переменную admin (должно вывести "Василий").
//


var name = prompt('Введите имя администратора', 'Login:');
var admin = name;

console.log (admin);
document.write('Приветствую Вас администратор:  ' + admin );
