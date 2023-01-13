'use strict'
let options = {
    width: 1024,
    height: 512,
    name: "test"
};

console.log(options.name);

options.bool = false;
options.color = {
    border: "black",
    background: "red"
};

console.log(options);

delete options.bool;
console.log(options);

for (let i in options) {
    console.log('Свойство ' + i + ' имеет значение ' + options[i]);
}

console.log(Object.keys(options).length);
console.log(Object.keys(options.color).length);

let arr = [1, 2, 3, 4, 5];
arr.pop();
arr.push(9);
arr.shift();
arr.unshift("1");

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log(arr);