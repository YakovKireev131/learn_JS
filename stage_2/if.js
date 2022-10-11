// if (2+5 == 7) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

'use strict'

// let num = 120;
// if (num == 50) {
//     console.log("пятьдесят");
// } else if (num < 50) {
//     console.log('Меньше 50')
// } else {
//     console.log('Больше 50');
// }

// let b = 190;
// (b > 100) ? console.log('Отлично') : console.log('Слабенько');

// let car = 10;
// switch (car) {
//     case 100:
//         console.log('Точно 100');
//         break;
//     case 99:
//     case 101:
//         console.log('Чуть-чуть не попал');
//         break;
//     default:
//         console.log('Что за бред!');
//         break;
// }

let browser = 'Firefox';
if (browser == "Edge") {
    console.log("You've got the Edge!");
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera' ) {
    console.log('Okay we support these browsers too')
} else {
    console.log('We hope that this page looks ok!')
}
let num = 2;
switch(num) {
    case 0:
        console.log('0');
        break;
    case 1:
        console.log('1');
        break;
    case 2:
    case 3:
        console.log('Вы ввели 2, а может быть и 3');
        break;
    default:
        console.log('Введите число из диапазона');
}