"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(firstName) {
    console.log(`Hello ${firstName}`);
}
greet("Rahul");
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(1, 2));
function adult(age) {
    return age > 18 ? true : false;
}
console.log(adult(60));
function higherOrderFunction(fn) {
    setTimeout(fn, 1000);
}
higherOrderFunction(function () {
    console.log("hi there");
});
//# sourceMappingURL=a.js.map