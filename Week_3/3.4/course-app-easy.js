const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());


let ADMINS = [];
let USERS = [];
let COURSES = [];

// Middleware to authenticate admin
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

// Admin long in route
app.post("/admin/login", adminAuthentication, (req,res)=>{
    res.json({msg:"Logged in successfully"});
})


// Admin course adding route
app.post("/admin/courses", adminAuthentication, (req,res)=>{
    const course = req.body;
    if(! course.title){
        res.status(411).json({message: "Please provide title to the courese"});
    }
    if(! course.description){
        res.status(411).json({message: "Please provide description to the courese"});
    }
    if(! course.price){
        res.status(411).json({message: "Please provide price to the courese"});
    }
    if(! course.imageLink){
        res.status(411).json({message: "Please provide imageLink to the courese"});
    }
    course.id = Date.now();
    COURSES.push(course);
    res.json({message: "Course created successfully", courseId: course.id});
})

// Admin course update route
app.put("/admin/courses/:id", adminAuthentication, (req,res)=>{
    const courseId = parseInt(req.params.id);
    const course = COURSES.find(c=> c.id === courseId);
    if(course){
        Object.assign(course,req.body);
        return res.json({message:"Course updated successfully"});
    }else{
        res.status(404).json({message:"Course not found"});
    }
})

app.get("/admin/courses", adminAuthentication, (req,res)=>{
    res.json({courses: COURSES});
})

app.get("/admin/courses/:id", adminAuthentication, (req,res)=>{
    const id = parseInt(req.params.id);
    const course = COURSES.find(c => c.id === id);
    if(!course){
        return res.status(404).json({error:"Invalid course ID"});
    }
    return res.json({c:course})
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
    
})