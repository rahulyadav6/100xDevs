const express = require("express");
const zod = require("zod");
const  User  = require("../models/user");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("../middleware");
const Account = require("../models/account");

const signupSchema = zod.object({
    username:zod.string().email(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string()
})
router.get("/", (req,res)=>{
    res.json({
        msg:"Hello from user routed"
    })
})
router.post("/signup", async(req,res) =>{
    const body = req.body;
    const result = signupSchema.safeParse(body);
    
    if(!result.success){
        return res.status(400).json({ message: "Invalid input format" });
    }
    
    
    const existingUser = await User.findOne({ username: result.data.username });
    if(existingUser){
        return res.status(400).json({
            msg:"Email already exists"
        })
    }

    const user = await User.create(result.data);
    const userId = user._id;
    //Create an account 
    const account = await Account.create({
        userId,
        balance: 1 + Math.random() * 10000,
    })
    console.log("Account Created:", account);
    const token = jwt.sign({ userId },process.env.jwt_SECRET);
    res.json({
        msg:`User created successfully`,
        token: token,
    })
})

router.post("/signin", async(req,res)=>{
    const body = req.body;
    const user = await User.findOne({ username: body.username, password: body.password });
    if(!user){
        return res.status(403).json({
            message:"Username or password is incorrect",
        })
    }
    const token = jwt.sign({userId: user._id}, process.env.jwt_SECRET);
    return res.status(200).json({
        message:"Logged in successfully",
        token: token,
    })
})

const updateBody = zod.object({
    password: zod.string().optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional(),
});
router.put("/", authMiddleware, async(req,res)=>{
    const { success, data } = updateBody.safeParse(req.body);
    if(!success){
        return res.status(403).json({
            message: "Invalid data format",
        })
    }
    try{
        const updatedUser = await User.updateOne(
           { _id: req.userId},
           {$set: data}
        )
        console.log(updatedUser);
        if(updatedUser.matchedCount === 0){
            return res.status(403).json({
                message:"No user found",
            })
        }
        if(updatedUser.modifiedCount === 0){
            return res.status(200).json({
                message:"No changes made (same data)",
            })
        }
        return res.status(200).json({
            msg:"User updated successfully"
        })
        
    }catch(err){
        console.error("Error updating user:", error);
        res.status(500).json({
        message: "Internal server error",
    });
    }
})

router.get("/bulk", authMiddleware, async(req,res)=>{
    try{
    const filter = req.query.filter;
    let users;
    if(filter === ""){
        users = await User.find();
    }else{
        users = await User.find({
            $or:[
                {firstname: {$regex: filter, $options: "i"} },
                {lastname: {$regex: filter, $options: "i"} },
            ]
        });
    }
    res.json({
        users: users.map(user => (
            {
                username: user.username,
                firstName: user.firstname,
                lastName: user.lastname,
                _id: user._id
            }
        ))
    })
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})


module.exports = router;