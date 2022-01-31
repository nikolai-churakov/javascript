"use strict";

//  Перевод показаний температуры из градусов Цельсия в Фарингейты
//  {Tcelsius} Заданая температура ( градусы Цельсия)
//  {Tfaringeit} Результат, температура в градусах Фарингейта
//  {toFixed} Округление результата до 1 знака после запятой.

  var Tcelsius  = + prompt('Введите температуру в градусах Цельсия', 'Градусы Цельсия')
  var Tfaringeit = 9 / 5 * Tcelsius + 32;

  var C = String.fromCharCode(8451);
  var F = String.fromCharCode(8457);

  alert('При температуре в градусах по Цельсию: Tc = ' + Tcelsius + C + ',\n' +
      'температура в градусах по Фаренгейту: Tf = ' + Tfaringeit.toFixed(1) + F + '.');
  document.write('При температуре в градусах по Цельсию: Tc = ' + Tcelsius + ' ' + C + ',\n' +
      'температура в градусах по Фаренгейту: Tf = ' + Tfaringeit.toFixed(1) +  F + '.');
  console.log( Tfaringeit.toFixed(1) )