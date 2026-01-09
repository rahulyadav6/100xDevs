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

interface User{
    firstName:string,
    lastName: string,
    age: number,
    email?:string // email is optional
}

function isLegal(user: User){
    user.age > 18 ? true: false
}

isLegal({
    firstName:"Rahul",
    lastName:"Yadav",
    age:22
})