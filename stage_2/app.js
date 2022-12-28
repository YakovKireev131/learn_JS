'use strict';
let money, time;

function start() {
    money = +prompt('Ваш бюджет в месяц', 0);
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Введите корректно ваш бюджет на месяц', 0);
    }
} 
start();


// 8.Подготовка к урокам

let appData = {
    budjet: money,
    timeData: time,
    savings: false,
    expenses: {},
    optionalExpenses: {},
    income: []
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = +prompt("Во сколько это обойдется?", 0);
        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
        a != "" && b != "" && a.length < 50) {
        } else {
            i = i - 1;
            alert("Вы ввели что-то не так, повторите, пожалуйста");
        } 
        appData.expenses[a] = b;
    };
}

chooseExpenses();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = prompt('Введите статью необязательных расходов', '');
        if (typeof(a) === 'string' && typeof(a) != null && a != '' && 
        a.length < 70) {
        } else {
            i = i - 1;
            alert("Вы ввели что-то не так, повторите, пожалуйста");
        }
        appData.optionalExpenses[i+1] = a;
    }
    console.log(appData.optionalExpenses);
}

chooseOptExpenses();
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

function detectDayBudget() {
    appData.moneyPerDay = (appData.budjet/30).toFixed(2);
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}

detectDayBudget();



function detectLevel() {
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
}

detectLevel(); 



function checkSavings() {
    appData.savings = confirm('У вас есть вклад');
    if(appData.savings == true) {
        let save = +prompt('Сколько денег у вас на вкладе?'),
            percent = +prompt('Под какой процент вы положили деньги на вклад?');
        appData.monthIncome = save * percent/1200;
        alert('Ваш ежемесячный доход с вклада:' + appData.monthIncome);
    }
}

checkSavings();