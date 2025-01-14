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
        try{
            const todos = JSON.parse(data);
            todos.push(newTodo);
            fs.writeFile("todos.json", JSON.stringify(todos), (err)=>{
                if(err){
                    return next(err);
                }
                res.status(200).json(newTodo);
            });
        }catch(parseError){
            return next(parseError);
        }
    })
})


app.get("/todos/:id",(req,res,next)=>{
    function findIndex(todos , id){
        for(let i=0; i<todos.length; i++){
            if(todos[i].id == id){
                return i;
            }
        }
        return -1;
    }
    const id =parseInt(req.params.id);
    if(isNaN(id)){
        return res.status(400).json({error:"id is not a valid number"});
    }
        fs.readFile("todos.json", "utf-8", (err,data)=>{
            if(err){
                return res.status(404).json({error:"File not found"});
            }
            try{
                const todos = JSON.parse(data);
                const todoIndex = findIndex(todos,id);
                if(todoIndex == -1){
                    return res.status(404).json({error:`To with id ${id} doesn't exist`});
                }
                return res.status(200).json({todo:todos[todoIndex]});
            }catch(parseError){
                return next(parseError); // Handle JSON parsing errors
            }
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

// for all other routes, return 404
app.get("*",(req,res)=>{
    res.status(404).json({error:"path is not defined"});
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})