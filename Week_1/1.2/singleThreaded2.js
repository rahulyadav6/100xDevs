function count(first,last){
    let sum = 0;
    for(let i=first; i<=last; i++){
        sum +=i;
    }
    return sum;
}

function printToScreen(){
    console.log("10 seconds has passed");
}
setTimeout(printToScreen,10*1000);
setTimeout(printToScreen,10*1000);


let ans = count(1,100000000000);
console.log(ans);
