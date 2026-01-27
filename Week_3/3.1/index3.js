const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/healthcheckup",(req,res)=>{
    const kidney = req.body.kidneys;
    const kidneyLength = kidney.length;
    res.send(`You have ${kidneyLength} kidneys`);
})

// global catch (if anything is worng with server it will get called)
app.use((err,req,res,next)=>{
    res.status(500).json({
        error:"Server error"
    })
})  

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})