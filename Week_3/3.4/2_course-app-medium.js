const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const port = 3000;

app.use(express.json());


let ADMINS = [];
let USERS = [];
let COURSES = [];

const secretkey = "tops3cr3t";

// const validTokens = new Set();

const generateJwt = (user)=>{
    const payload = {username: user.username};
    const token =  jwt.sign(payload, secretkey, {expiresIn: '1h'});
    // validTokens.add(token);
    return token;
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
        // if(!validTokens.has(token)){
        //     return res.status(403).json({ error: "Token is invalid" });
        // }
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


/*  -->     User logics goes here  -->    */


// User signup route
app.post("/users/signup", (req,res)=>{
    const user = {...req.body, purchasedCourses:[]};
    // const user = {
    //     username: req.body.username,
    //     password: req.body.password,
    //     purchsedCourses:[]
    // }
    const existingUser = USERS.find(u=>u.username === user.username)
    if(existingUser){
        res.status(403).json({error:"User already exists"});
    }else{
        USERS.push(user);
        const token = generateJwt(user);
        res.json({message:"User created successfully", token});
    }
})

//  User login route
app.post("/users/login", userAuthentication, (req,res)=>{
    const user = req.user;
    if(user){
        const token = generateJwt(user);
        res.json({message:`Welcome ${req.user.username} You are logged in`,token})
    }else{
        console.log("Inside route");
        res.status(403).json({message:"User authentication failed"});
    }
})

// Route to see the user profile 
app.get("/profile", userAuthentication,(req,res)=>{
    const user = req.user;
    res.json({
        message: `Welcome, ${user.username}!`,
        purchasedCourses: user.purchasedCourses
    });
})

app.get("/users/courses", authenticateJwt, (req,res)=>{
    // const user = req.user.username;
    res.json({ courses: COURSES.filter(c=> c.published) });
})

app.post("/users/courses/:id", authenticateJwt, (req,res)=>{
    const username = req.user.username;
    const user = USERS.find((u) => u.username === username);
    const courseId = parseInt(req.params.id);
    const course = COURSES.find(c=> c.id === courseId && c.published);
    if(course){
        user.purchasedCourses.push(courseId);
        res.json({msg:`Hey ${user.username}, Your have successfully purchased course with id ${courseId}`});
    }else{
        res.status(404).json({error:"Course not found or not available"});
    }
})

app.get("/users/purchasedCourses", authenticateJwt, (req,res)=>{
    // const purchasedCourses = COURSES.filter(c=> req.user.purchasedCourses.includes(c.id));
    // the above one line does the same thing as below lines does 

    const username = req.user.username;
    const user = USERS.find((u)=>u.username === username);
    let purchasedCourseIds = user.purchasedCourses
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