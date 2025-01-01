let counter = 1;
function printCounter(){
    // console.clear();
    console.log(counter);
    counter = counter + 1;
}

setInterval(printCounter,1*1000);

let counter2 = 0;
for(let i=0; i<100000000000; i++){
    counter2 = counter2+1;
}
console.log(counter2);
