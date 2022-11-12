'use strict'
// function showMessage(txt) {
//     alert(txt);
// }

// showMessage('Hello');

// Локальная переменная
// function localPerem(){
//     let a = 10;
//     console.log(a);
// }

// localPerem();
// console.log(a);

// Глобальная перменная
// let a = 10;
// function globalPerem(){
//     console.log(a);
// };
// globalPerem();

// function globalPerem2(){
//     a = 20;
//     console.log(a);
// };
// globalPerem2();
// console.log(a);

// Глобальная и локальная переменные
// let a = 10;
// function func(){
//     let a = 20;
//     console.log(a);
// };
// func();
// console.log(a);

function calc(a,b) {
    return (a+b);
}
let sum = calc(3,4);

console.log(sum);