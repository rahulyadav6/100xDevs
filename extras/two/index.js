const express = require('express');
const app = express();


function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age
    if(age >= 14){
        next();
    }else{
        res.json({
            msg:"Sorry you are not of age yet",
        })
    }
}


app.get("/ride1", isOldEnoughMiddleware,(req,res)=>{
    res.json({
        msg:"You have successfully ridden the ride 1",
    })
})
app.get("/ride2", isOldEnoughMiddleware, (req,res)=>{
    res.json({
        msg:"You have successfully ridden the ride 2",
    })
})

app.listen(3000,()=>{
    console.log(`Listening to port 3000`);
})