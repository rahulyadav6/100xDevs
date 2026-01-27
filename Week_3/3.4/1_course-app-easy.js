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




/*  -->     User logics goes here  -->    */


// User signup route
app.post("/users/signup", (req,res)=>{
    const user = {...req.body, purchasedCourses:[]};
    // const user = {
    //     username: req.body.username,
    //     password: req.body.password,
    //     purchsedCourses:[]
    // }
    USERS.push(user);
    res.json({message:"User created successfully"});
})

//  User login route
app.post("/users/login", userAuthentication, (req,res)=>{
    res.json({message:`Welcome ${req.user.username} You are logged in`})
})

// Route to see the user profile 
app.get("/profile", userAuthentication,(req,res)=>{
    const user = req.user;
    res.json({
        message: `Welcome, ${user.username}!`,
        purchasedCourses: user.purchasedCourses
    });
})

app.get("/users/courses", userAuthentication, (req,res)=>{
    res.json({ courses: COURSES.filter(c=> c.published) });
})

app.post("/users/courses/:id", userAuthentication, (req,res)=>{
    const courseId = parseInt(req.params.id);
    const course = COURSES.find(c=> c.id === courseId && c.published);
    if(course){
        req.user.purchasedCourses.push(courseId);
        res.json({msg:"Course purchased successfully"});
    }else{
        res.status(404).json({error:"Course not found or not available"});
    }
})

app.get("/users/purchasedCourses", userAuthentication, (req,res)=>{
    // const purchasedCourses = COURSES.filter(c=> req.user.purchasedCourses.includes(c.id));
    // the above one line does the same thing as below lines does 
    let purchasedCourseIds = req.user.purchasedCourses
    let purchasedCourses = [];
    for(let i=0; i<COURSES.length; i++){
        if(purchasedCourseIds.indexOf(COURSES[i].id) !== -1){
            purchasedCourses.push(COURSES[i]);
        }
    }
    res.json({purchasedCourses});
})



app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
    
})