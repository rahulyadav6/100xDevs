const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const secret = "sup3rsecr3t";

//Define mongodb schema

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    purchasedCourses: [{type: mongoose.Schema.Types.ObjectId, ref: 'courses'}]
});

const adminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
})

// Define mongoose model
const User = mongoose.model('User',userSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Course = mongoose.model('Course',courseSchema);

// Function to make database connection 
async function connectToDatabase(req,res,next){
    try{
        await mongoose.connect("mongodb+srv://admin:u4aAj4xkj2QZfoap@cluster0.npomqzy.mongodb.net/courses");
        console.log("Connected to database");
    }catch(err){
        console.log("Error connecting to database");
        process.exit(1);
    }
}

// Jwt authentication 
const authenticateJwt = (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(authHeader){
        const token = authHeader.split(' ')[1];
        jwt.verify(token,secret,(err,user)=>{
            if(err){
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    }else{
        res.sendStatus(401);
    }
}

// Admin routes 

// Admin sign up
app.post('/admin/signup', async(req,res)=>{
    const { username, password } = req.body;
    const admin = await Admin.findOne({username});
    if(admin){
        res.status(403).json({message:'Admin already exists'});
    }else{
        const newAdmin = new Admin({username, password});
        await newAdmin.save();
        const token = jwt.sign({username, role : 'admin'}, secret, {expiresIn: '1h'} )
        res.json({message:'Admin created successfully',token});
    }
})

// Admin log in route
app.post('/admin/login', async(req,res)=>{
    const { username, password } = req.headers;
    const admin = await Admin.findOne({ username, password });
    if(admin){
        const token = jwt.sign({ username, role: 'admin' }, secret, {expiresIn: '1h'} );
        res.json({message: 'Logged in successfully ', token});
    }else{
        res.status(403).json({message: 'Please signup first '});
    }
});

// Admin course post route
app.post('/admin/courses', authenticateJwt, async(req,res)=>{
    const adminUsername = req.user.username;
    const adminName = adminUsername.split('@')[0];
    const course = new Course(req.body);
    const title = course.title;
    const description = course.description;
    const isAvailable = await Course.findOne({title, description});
    if(isAvailable){
        return res.status(403).json({error:`Course with same title and description already exists`});
    }
    await course.save();
    res.json({message: `Hey ${adminName} you have successfully created a course`, courseId: course.id }) 
} )


// Admin course update route 
app.put('/admin/courses/:courseId', authenticateJwt, async(req,res)=>{
    const id = req.params.courseId;
    console.log(id);
    const course = await Course.findByIdAndUpdate(id,req.body, {new: true});  // new: true: Returns the updated document instead of the original.
    if(course){
        return res.json({message:`Course updated successfully`, course});
    }else{
        return res.status(403).json({error:`Course with id ${id} not found`});
    }

})

// admin trying to get all courses route
app.get('/admin/courses', authenticateJwt, async(req,res)=>{
    const courses = await Course.find({});
    res.json({courses});
})

// Admin trying to get a particular course with id 
app.get('/admin/courses/:courseId', authenticateJwt, async(req,res)=>{
    const courseId = req.params.courseId;
    try{
        const course = await Course.findById(courseId);
        if(!course){
            return res.status(404).json({error: "Course not found "});
        }
        return res.json({course});
    }catch(err){
        return res.status(404).json({error:`Invaliddddd courseId`});
    }
})



// User routes


// Make connection to database and start the server
async function startServer(){
    await connectToDatabase(); // connect even before the server starts
    app.listen(3000,()=>{
        console.log("Listening to port 3000");
    })
}
startServer();