let count = 0;
const intervalId = setInterval(()=>{
    const d = new Date();
    let second = d.getSeconds();
    console.log(`Hey 2 seconds has been paseed and second is ${second}`);
    count++;
    if(count == 5) clearInterval(intervalId);
},2*1000)




