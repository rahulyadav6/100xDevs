const express = require("express");
const app = express();
const port = 3000;


// This middleware will count the number of times my server is hit
let numberOfRequests = 0;
function calculateRequest(req,res,next){
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}
// We need to call this middleware in every route because if any route request is made we need to increase number of requets so either you can call in every route or easier way is to use the below syntax of app.use

app.use(calculateRequest);

function userMiddleWare(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    if(username != "rahul" || password != "rahul123"){
        return res.status(403).json({
            msg:"Incorrect inputs",
        })
    }else{
        req.user = {username}
        next();
    }
}

function kidneyMiddleWare(req,res,next){
    const kidneyId = req.query.kidneyId;
    if(kidneyId != 1 && kidneyId != 2){
        res.status(403).json({
            msg:"You are not human."
        });
    }else{
        req.kidneyInfo = {kidneyId};
        next();
    }
}


app.get("/healthcheckup",userMiddleWare, kidneyMiddleWare, (req,res)=>{
    // do something with kidney here
    const {username} = req.user;
    const {kidneyId} = req.kidneyInfo;
    
    res.send(`Hey ${username} your kidney count is ${kidneyId}`);

})

app.get("/kidneycheck", userMiddleWare, kidneyMiddleWare, (req,res)=>{
    // Do something with kidney here
    res.send(`You heart is healthy`);
})

app.get("/heartcheck", userMiddleWare, (req,res)=>{
    res.send(`Your heart is healthy`);
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})