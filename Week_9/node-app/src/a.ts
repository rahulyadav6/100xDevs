const x: number = 5;
console.log(x);

function greet(firstName: string){
    console.log(`Hello ${firstName}`);
    
}

greet("Rahul");

function sum(num1: number, num2: number): number{
    return num1 + num2;
}
console.log(sum(1,9));

// function as argument
function runAfter1s(fn: ()=> void ){
    setTimeout(fn,1000);
}

runAfter1s(function(){
    console.log(`Hi there`);
    
})

