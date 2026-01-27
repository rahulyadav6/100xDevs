function sum(num1, num2,fn){
    let result = num1 + num2;
    fn(result);
}
function displayResult(data){
    console.log(`Result of the sum is: ${data}`);
} 
function displayResultPassive(data){
    console.log(`Sum's result is: ${data}`);
} 

//you are only allowed to call one function after this.
// How will you displayResult of a sum.

sum(5,5,displayResult);
