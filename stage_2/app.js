'use strict';

// 8.Подготовка к урокам

let money = +prompt('Ваш бюджет в месяц', 0),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');




let appData = {
    budjet: money,
    timeData: time,
    savings: false,
    expenses: {},
    optionalExpenses: {},
    income: []
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = +prompt("Во сколько это обойдется?", 0);
    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
    a != "" && b != "" && a.length < 50) {
        appData.expenses[a] = b;
    } else {
        i = i - 1;
        alert("Вы ввели что-то не так, повторите, пожалуйста");
    } 
};

// let i = 0;
// while(i <2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = +prompt("Во сколько это обойдется?", 0);
//     if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
//         a != "" && b != "" && a.length < 50) {
//             appData.expenses[a] = b;
                
//     } else {
//         i = i - 1;
//         alert("Вы ввели что-то не так, повторите, пожалуйста");
//     } 
//     i++;
// }

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     b = +prompt("Во сколько это обойдется?", 0);
//     if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
//     a != "" && b != "" && a.length < 50) {
//         appData.expenses[a] = b;
            
//     } else {
//         i = i - 1;
//         alert("Вы ввели что-то не так, повторите, пожалуйста");
//     }  
//     i++;   
// } while(i<2);

console.log(appData.expenses);

if (isNaN(money)) {
    appData.budjet = +prompt('Введите корректно ваш бюджет на месяц', 0);
} 

appData.moneyPerDay = appData.budjet/30;
alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if(appData.moneyPerDay <= 500) {
    alert('Ты бомж!');
} else if (appData.moneyPerDay > 500 && appData.moneyPerDay <= 2000) {
    alert('Пойдет для сельской местности');
} else if (appData.moneyPerDay > 2000 && appData.moneyPerDay <= 5000) {
    alert('Средний уровень достатка');
} else if (appData.moneyPerDay > 5000 && appData.moneyPerDay <= 10000) {
    alert('Высокий уровень достатка');
} else if (appData.moneyPerDay > 10000) {
    alert('Красава! Ты алигарх!');
} else {
    console.log('Ошибка, АЛЯРМ!!!')
}   

