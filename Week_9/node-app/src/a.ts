// function greet(firstName: string){
//     console.log(`Hello ${firstName}`)
// }

// greet("Rahul") 

// function sum(num1:number, num2:number): number {
//     return num1 + num2;
// }
// console.log(sum(1,2));

// function adult(age:number): boolean {
//     return age > 18 ? true: false;
// }
// console.log(adult(60));

// function higherOrderFunction(fn: ()=> void){
//     setTimeout(fn,1000);

// }

// higherOrderFunction(function(){
//     console.log("hi there");
// })



/* ---------------------------- interfaces -------------------------- */

// interface User{
//     firstName:string,
//     lastName: string,
//     age: number,
//     email?:string // email is optional
// }

// function isLegal(user: User){
//     user.age > 18 ? true: false
// }

// isLegal({
//     firstName:"Rahul",
//     lastName:"Yadav",
//     age:22
// })


/* --------------- class, interface and objects ----------------- */
// interface Person{
//     name:string,
//     age: number
// }
// class Employee implements Person {
//     name: string;
//     age: number;
//     constructor(n:string, a:number){
//         this.name = n;
//         this.age = a;
//     }
//     greet(phrase: string){
//         console.log(`${phrase} ${this.name}`);
        
//     }
// }

// let ram = new Employee("Ram", 22);
// console.log(ram.name);



/* ------------Either stirng or number ------------ */

// type GreetArg = number | string
// function greet(id: GreetArg){ 
//     console.log(id);   
// }

// greet(1);
// greet("Rahul");

/* --------Arrays in TS ------------ */

// function maxValue(arr: number[]): number{
//     let max = arr[0] as number;
//     for(const value of arr){
//         if(value > max){
//             max = value
//         }
//     }
//     return max;
// }

// maxValue([1,2,3]);



/* ---------------generics --------------------- */
function identity<T>(arg:T){
    return arg;
}

let output1 = identity<string>("Hello world");
let output2 = identity<number>(12345);
console.log(output1);
console.log(output2);

