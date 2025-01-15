const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());


let ADMINS = [];
let USERS = [];
let COURSES = [];

const adminAuthentication = (req,res,next)=>{
    const { username, password} = req.headers;
    const admin = ADMINS.find(a => a.username === username && a.password === password);
    if(admin){
        next();
    }else{
        res.status(403).json({message: "Admin authentication failed"});
    }
};

// Admin signup route
app.post("/admin/signup",(req,res)=>{
    const admin = req.body;
    const existingAdmin = ADMINS.find(a => a.username === admin.username);
    if(existingAdmin){
        res.status(403).json({msg:"Admin already exist"});
    }else{
        ADMINS.push(admin);
        res.json({msg:"Admin created successfully"});
    }
})

app.post("/admin/login", adminAuthentication, (req,res)=>{
    res.json({msg:"Logged in successfully"});
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
    
})