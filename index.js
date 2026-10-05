"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = "Dheema";
var user = '20';
console.log(user);
let place = "kerala";
let date = "monday";
date = 22;
console.log(date);
//Array
let arr = [1, "h"];
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2);
//Object
let obj = { uname: "dheema", age: 20 };
console.log(obj);
console.log(obj.uname);
//Function
function greet(name) {
    console.log("Good Morning " + name);
}
greet('Paul');
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 5));
const res = sum(1, 4);
console.log(res);
function diff(a, b) {
    return (a - b).toString();
}
console.log(diff(10, 5));
const mul = (a, b) => {
    return a * b;
};
console.log(mul(4, 5));
//Symbol
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2);
//# sourceMappingURL=index.js.map