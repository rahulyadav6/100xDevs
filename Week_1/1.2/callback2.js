function calculateArithmetic(a,b,fnToCall){
    const ans = fnToCall(a,b);
    return ans;
}
function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

const value = calculateArithmetic(5,4,sub);

console.log(value);
