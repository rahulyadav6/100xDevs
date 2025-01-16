const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const port = 3000;

app.use(express.json());


let ADMINS = [];
let USERS = [];
let COURSES = [];

const secretkey = "tops3cr3t";

const generateJwt = (user)=>{
    const payload = {username: user.username};
    return jwt.sign(payload, secretkey, {expiresIn: '1h'});
}

// Middleware to authenticate admin
const adminAuthentication = (req,res,next)=>{
    const { username, password} = req.headers;
    const admin = ADMINS.find(a => a.username === username && a.password === password);
    if(admin){
        req.admin = admin;
        next();
    }else{
        res.status(403).json({message: "Admin authentication failed"});
    }
};

// Middleware to authenticate user
const userAuthentication = (req,res,next)=>{
    const {username, password} = req.headers;
    const user = USERS.find(u=> u.username === username && u.password === password);
    if(!user){
        return res.status(400).json({error:"User Authentication failed "});
    }else{
        req.user = user;
        next();
    }
}

// token authenctication
const authenticateJwt = (req,res,next)=>{
    const authHeader = req.headers.authorization;

    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, secretkey, (err,user)=>{
            if(err){
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        } )
    }else{
        res.status(401).json({error:"Authenticaiton failed"});
    }
}

// Admin signup route
app.post("/admin/signup",(req,res)=>{
    const admin = req.body;
    const existingAdmin = ADMINS.find(a => a.username === admin.username);
    if(existingAdmin){
        res.status(403).json({msg:"Admin already exist"});
    }else{
        ADMINS.push(admin);
        const token = generateJwt(admin);
        res.json({msg:"Admin created successfully", token});
    }
})

// Admin long in route
app.post("/admin/login", adminAuthentication, (req,res)=>{
    const admin = req.admin;
    if(admin){
        const token = generateJwt(admin);
        res.json({message: "Logged in successfully", token});
    }else{
        res.status(403).json({message:"Admin authentication failed"});
    }
})


// Admin course adding route
app.post("/admin/courses", authenticateJwt, (req,res)=>{
    const user = req.user.username;
    console.log(user);
    const course = req.body;
    course.id = COURSES.length + 1;
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
    COURSES.push(course);
    res.json({message: "Course created successfully", courseId: course.id});
})

// Admin course update route
app.put("/admin/courses/:id", authenticateJwt, (req,res)=>{
    const admin = req.user.username;
    console.log(admin);
    const courseId = parseInt(req.params.id);
    const course = COURSES.find(c=> c.id === courseId);
    if(course){
        Object.assign(course,req.body);
        return res.json({message:"Course updated successfully"});
    }else{
        res.status(404).json({message:"Course not found"});
    }
})

app.get("/admin/courses", authenticateJwt, (req,res)=>{
    res.json({courses: COURSES});
})

app.get("/admin/courses/:id", authenticateJwt, (req,res)=>{
    const admin = req.user.username;
    console.log(admin);
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