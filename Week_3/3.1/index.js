const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.json({msg:"Welcome "})
})

// This is the ugly way of doing authentication if we have to authenticate again in aonther route we will have to write all the authentication logic again so we will use middlewares which is demonstrated in next file i,e index2.js


app.get("/healthcheckup",(req,res)=>{
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;
    console.log(username);
    console.log(password);
    
    if(username != "rahul" || password != "rahul123"){
        return res.status(403).json({
            msg:"User doesn't exist",
        });
    }

    if(kidneyId != 1 && kidneyId != 2){
        return res.status(411).json({
            msg:"Wrong inputs",
        })
    }
    console.log("Logged in");
    res.send("Logged in")

})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})