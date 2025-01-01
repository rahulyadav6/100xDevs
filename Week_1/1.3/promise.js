function promiseBody(resove){
    setTimeout(resove, 5000);
}
function medicine1Get(){
    let answer = new Promise(promiseBody);
    return answer;
}

function printThing(){
    console.log("medicine 1 received");    
}
let medicinePromise = medicine1Get();
console.log(medicinePromise);
medicinePromise.then(printThing);
