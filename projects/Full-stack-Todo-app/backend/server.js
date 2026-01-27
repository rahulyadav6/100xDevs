const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.text());


async function connectToDatabase(req,res,next){
    try{
        await mongoose.connect("mongodb+srv://admin:u4aAj4xkj2QZfoap@cluster0.npomqzy.mongodb.net/todo");
        console.log("Connected to database");
    }catch(err){
        console.log("Error connecting to database");
        process.exit(1);
    }
}

const todoSchema = new mongoose.Schema({
    todo:String,
})
const Todos = mongoose.model('todos',todoSchema);


app.get('/todos', async(req,res)=>{
    const todos = await Todos.find({});
    res.json({todos});
})

app.post('/todos', async(req,res)=>{    
    const todoText = req.body;
    const isAvailable = await Todos.findOne({todoText});
    if(isAvailable){
        return res.status(403).json({error:`Todo already available`});
    }
    const newTodo = new Todos({ todo: todoText });
    await newTodo.save();
    res.json({message:"Todo added successfully"});
})


app.put('/todos/:id', async(req,res)=>{
    const id = (req.params.id);
    if(isNaN(id)){
        return res.status(404).json({error:"Not a valid id"});
    }
    const isAvailable = Todos.findById(id);
    if(!isAvailable){
        return res.status(403).json({error:"To do not available"});
    }
    
})


async function startServer(){
    await connectToDatabase();
    app.listen(port, ()=>{
        console.log("Listening to port 5000");
    })
}

startServer();