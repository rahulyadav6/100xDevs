let sum = 0;
for(let i=0; i<1000000000000; i++){
    sum += i;
}
console.log(sum);

//why does running this code cpu is not taking the core utilization to 100% does it context switch or continuously run the code on single core.