const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo} = require("./types");
const { todo } = require("./db");


const app = express();




const port = 3000;
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));

app.post("/todos", async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        return res.status(411).json({
            msg:"You sent the wrong inputs",
        })
    }
    const {title, description} = createPayload;
    try{
        await todo.create({
            title:createPayload.title,
            description: createPayload.description,
            completed: false
        })
        res.json({
            msg:"Todo added successfully "
        })
    }catch(err){
        res.status(500).json({
            msg : "Error while adding the todo",
            error: err.message
        })
    }
})


app.get("/todos", async (req,res)=>{
    const todos = await todo.find({});
    res.json({
        todos: todos,
    })
})

app.put("/completed",async (req,res)=>{
    const updatedPayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatedPayload);
    if(!parsedPayload.success){
        return res.status(411).json({
            msg:"You sent the wrong inputs",
        })
    }
    try{
        const result = await todo.updateOne(
        {_id: req.body.id},
        {completed: true})
        if(result.nmodified === 0){
            return res.status(404).json({
                msg:"Todo not found or already marked as completed"
            });
        }
        res.json({
            msg:"Todo marked as completed"
        })
    }catch(err){
        res.status(500).json({
            msg: "Error while updating the todo",
            error: err.message,
            stack:err.stack
        })
    }
})



app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})