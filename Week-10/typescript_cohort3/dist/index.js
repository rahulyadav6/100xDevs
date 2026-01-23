"use strict";
//Assignment 1
// function greet(name:string){
//     console.log(`Hello ${name}`);
// }
Object.defineProperty(exports, "__esModule", { value: true });
// greet("Rahul");
// Assignment 2
const sum = (num1, num2) => {
    return num1 + num2;
};
console.log(sum(1, 2));
// Assignment 3 function that takes another funciton as input and runs it after 1sec
function hof(fn) {
    setTimeout(() => {
        fn();
    }, 2000);
}
function print() {
    console.log("Hello ji");
}
hof(print);
//# sourceMappingURL=index.js.map