"use strict";

//  Перевод показаний температуры из градусов Цельсия в Фарингейты
//  {Tcelsius} Заданая температура ( градусы Цельсия)
//  {Tfaringeit} Результат, температура в градусах Фарингейта
//  {toFixed} Округление результата до 1 знака после запятой.

  const inputTemperatureCelsius  = + prompt('Введите температуру в градусах Цельсия', 'Градусы Цельсия');
  const converteTemperatureFaringeit = 9 / 5 * inputTemperatureCelsius  + 32;

  alert('При температуре в градусах по Цельсию: Tc = ' + inputTemperatureCelsius + ' \xB0C' + ',\n' + 'температура в' +
      'градусах по Фаренгейту: Tf = ' + converteTemperatureFaringeit.toFixed(1) + ' \xB0F' + '.');

  document.write('При температуре в градусах по Цельсию: Tc = ' + inputTemperatureCelsius + ' ' + ' \xB0C' + ',\n' +
      'температура в градусах по Фаренгейту: Tf = ' + converteTemperatureFaringeit.toFixed(1) + ' \xB0F' +
      '.');

  console.log( converteTemperatureFaringeit.toFixed(1) );