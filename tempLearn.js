// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     }
// }

function checkAge(age) {return (age > 18) ? true : confirm('Родители разрешили?');}


const pow = (x, n) => {
    let result = x;

    for (let i = 1; i < n; i++) {
        result = result * x;
    }
    return result;
}

/**
 * Функция возведение числа в степень
 */
let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    alert( pow(x, n) );
}