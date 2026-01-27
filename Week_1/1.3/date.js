

function calculateSum(){
    let a = 0;
    for(let i=0; i<=10000000; i++){
        a = a+i;
    }
    return a;
}
const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();
calculateSum();
const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();


console.log(afterTimeInMs-beforeTimeInMs);
