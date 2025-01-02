/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/
function calcSum(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum += i;
    }
}
function calculateTime(n) {
    const beforeSumDate = new Date();
    let beforeSumtime = beforeSumDate.getTime();
    calcSum(n);
    const afterSumDate = new Date();
    let afterSumtime = afterSumDate.getTime();
    return afterSumtime - beforeSumtime;
}

// console.log(calculateTime(100));
// console.log(calculateTime(100000));
// console.log(calculateTime(1000000000));
console.log(calculateTime(10000000000));