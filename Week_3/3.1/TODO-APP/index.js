const express = require("express");
const fs = require("fs");

const port = 3000;
const app = express();

app.use(express.json());


// Get method to get all todos
app.get("/todos",(req,res)=>{
    fs.readFile("todos.json","utf-8",(err,data)=>{
        if(err){
            return res.status(404).json({error:"Failed to read file"});
        }
        return res.status(200).json({"todos": JSON.parse(data)});
    })
})

// Post method to post a todo

app.post("/todos",(req,res,next)=>{
    const newTodo = {
        id: Math.floor(Math.random() * 1000000), // unique random id;
        title: req.body.title,
        description: req.body.description
    };
    if(newTodo.title == undefined){
        return res.status(300).json({error:"Title is required"});
    }
    if(newTodo.description == undefined){
        return res.status(300).json({error:"Description is required"});
    }
    fs.readFile("todos.json", "utf-8", (err,data)=>{
        if(err){
            return next(err);
        }
        const todos = JSON.parse(data);
        todos.push(newTodo);
        fs.writeFile("todos.json", JSON.stringify(todos), (err)=>{
            if(err){
                return next(err);
            }
            res.status(200).json(newTodo);
        })
    })
})



app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname) + "/index.html");
})


// Middleware to catch global errors
app.use((err,req,res,next)=>{
    res.status(500).json({
        error:"Server error"
    })
})
app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})