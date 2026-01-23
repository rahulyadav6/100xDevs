//Assignment 1
// function greet(name:string){
//     console.log(`Hello ${name}`);
// }

// greet("Rahul");

// Assignment 2
// const sum = (num1:number, num2:number):number =>{
//     return num1 + num2;
// }

// let ans = (sum(1,2));
// // ans = "Rahul"; // this will give error becoz return type of sum funciton is number.
// console.log(ans);



// Assignment 3 function that takes another funciton as input and runs it after 1sec
// function higherOrderFunction(fn: ()=>void){
//     setTimeout(fn,2000)
// }

// function print(){
//     console.log("Hello ji");
// }

// higherOrderFunction(print);



// interfaces

interface UserType{
    name:string;
    age:number;
}
function greet(user:UserType){ 
    console.log(`Hello ${user.name} Your age is ${user.age}`);
}

greet({name:"Rahul",age:24})

console.log("hello");
