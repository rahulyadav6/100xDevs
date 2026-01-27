const express = require('express');
let bodyParser = require('body-parser');
const app = express();
const port = 3000;


function middlesare1(req,res,next){
    console.log("From inside middleware" + req.headers.counter);
    // res.send(`Error form inside middleware`);
    next();
}
app.use(middlesare1);
app.use(bodyParser.json());


function calculateSum(counter){
    let sum = 0;
    for(let i=0; i<=counter; i++){
        sum += i;
    }
    return sum;
}

// app.post("/handlesum",(req,res)=>{
//     // let counter = req.query.counter;   // get counter variable from query ie from url bar    
//     // let counter = req.headers.counter;  // get counter variable form header 

//     console.log(req.body);
//     let counter = req.body.counter;
//     if(counter < 100000){
//         let calculatedSum = calculateSum(counter);
    
//         let answer = {
//             sum:calculatedSum,
//         }
//         return res.send(answer)
//     }else{
//         return res.status(411).send("You have sent a very big number")
//     }

// })



app.get("/handlesum",(req,res)=>{
    let counter = req.query.counter;
    let calculatedSum = calculateSum(counter);
    let answerObj = {
        sum:calculatedSum,
    }
    res.send(answerObj)
})
app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
})