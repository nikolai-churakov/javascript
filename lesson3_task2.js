// 2.
// Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно вот так:
// ```
// for(…){/* здесь пусто */}
// ```
"use strict";
let arr = [
    ['чураков', 'николай', 7177872, 34],
    [true, 'москва', 'ЮЗАО', 261],
    [13, 0o3, 101, 777000],
];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}
console.log(arr.length);