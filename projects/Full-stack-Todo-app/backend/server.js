const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

app.use(express.json());

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





async function startServer(){
    await connectToDatabase();
    app.listen(port, ()=>{
        console.log("Listening to port 5000");
    })
}

startServer();