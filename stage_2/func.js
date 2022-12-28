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

// function calc(a,b) {
//     return (a+b);
// }
// let sum = calc(3,4);

// console.log(sum);

// let a = 10;
// function func(){
// 	//a =20;
// };
// func();
// console.log(a); 
// function a(i) {
//     return function() {
//         console.log(i*10);
//     }
// }

// let asd = a(9);
// asd();

// let strell = function(a,b) {
//     return a+b;
// }
// console.log(strell(2,4))
// 
// //Более короткая запись функции выше
// 
// let strel = (a,b) => a+b;
// console.log(strel(1,7));

// let str = "test test ";
// console.log(str.length);

// console.log(str.toUpperCase());
// str = str.toUpperCase();
// console.log(str);


function first() {
    setTimeout(function(){
        console.log(1);
    }, 1500);
}

function second() {
    console.log(2);
}

first();
second();