const express = require ("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());
const JWT_SECRET = "ilovekiara";

async function connectToDatabase(req,res,next){
    try{
        await mongoose.connect("mongodb+srv://admin:admin%40123@cluster0.rgdkn.mongodb.net/userData");
        console.log("Connected to MongoDB");
    }catch(err){
        console.error("Error connecting to MongoDB", err);
        process.exit(1);
    }
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
});
const user = mongoose.model('users',userSchema);

app.post("/signup", async(req,res)=>{
    try{
        const {name,username,password} = req.body;
        if(!name || !username || !password){
            return res.status(400).json({error: "All fields are required"});
        }
        const existingUser = await user.findOne({email:username})
        if(existingUser){
            return res.status(400).send("Username already exists");
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new user({
            name:name,
            email:username,
            password:hashedPassword
        });
        await newUser.save();

        // Generate jwt
        const token = jwt.sign({username},JWT_SECRET,{
            expiresIn: "1h",
        });
        res.status(201).json({
            msg:"User created successfully",
            user: token,
        });
    }catch(err){
        res.status(500).json({error:"Internal server error"});
    }
});



async function startServer(){
    await connectToDatabase(); // connect to dabase first even before server starts
    app.listen(3000,()=>{
        console.log("Server is running on port 3000");
    })
}
startServer();



// method 2 by using immeditely invoked async function

// (async ()=>{
//     await connectToDatabase();
//     app.listen(3000,()=>{

//     });
// })();