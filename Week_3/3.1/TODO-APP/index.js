const express = require("express");

const fs = require("fs");


const port = 3000;
const app = express();


app.get("/todos",(req,res)=>{
    fs.readFile("todos.json","utf-8",(err,data)=>{
        if(err){
            return res.status(404).json({error:"Failed to read file"});
        }
        return res.status(200).json({"todos": data});
    })
})


app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})