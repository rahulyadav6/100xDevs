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

// interface UserType{
//     name:string;
//     age:number;
// }
// function greet(user:UserType){ 
//     console.log(`Hello ${user.name} Your age is ${user.age}`);
// }

// greet({name:"Rahul",age:24})


//type in typescript

// interface Manager{
//     name:string,
//     age:number
// }
// interface Employee{
//     name:string,
//     department:string
// }

// type TeamLead = Manager & Employee

// let t: TeamLead = {
//     name:"Rahul",
//     age:23,
//     department:"Scinece"
// }
// console.log(t);


// interface People{
//     name: string,
//     age:number,
//     greet:()=>string,
// }

// const person1:People = {
//     name:"Rahul",
//     age:23,
//     greet: ()=>{
//         return "hello"
//     }
// } 

// person1.greet();


// interface User{
//     name:string;
//     age:number;
//     isLegal():boolean;
// }

// class Manager implements User{
//     name: string;
//     age: number;
//     constructor(name:string, age:number){
//         this.name = name;
//         this.age = age;
//     }
//     isLegal(): boolean {
//         return this.age > 18;
//     }
// }

// unions and intersections in type
// type Employee = {
//     name:string;
//     startDate:string;
// }
// type Manager = {
//     name:string;
//     department:string
// }
// type TeamLead = Employee & Manager;

// let e:Employee = {
//     name:"rahul",
//     startDate:"01-02,2004"
// }

// let m:Manager = {
//     name:"ak",
//     department:"development"
// }
// let t:TeamLead = {
//     name:"harkirat",
//     startDate:"02,01,2000",
//     department:"development"
// }


// type User = {
//     name:string;
//     age:number;
// }
// type Admin = {
//     name:string;
//     permissions:string;
// }

// type UserOrAdmin = User | Admin

// function greet(user: UserOrAdmin){
//     console.log(user.name);
// }








// given the interfae write a function that takes array of users as input and return legal users age > 18

interface User{
    firstName:string;
    lastName:string;
    age:number
}
function legal(users:User[]){
    let legalUser = [];
    for(const user of users){
        if(user.age > 18) legalUser.push(user.firstName);
    }
    return legalUser;
}

let legalUsers = legal([{firstName:"rahul", lastName:"yadav", age:20},{firstName:"kaushal", lastName:"thakur", age:23},{firstName:"dhiraj", lastName:"kamti", age:12},{firstName:"rites", lastName:"yadav", age:5}]);
console.log(legalUsers);
