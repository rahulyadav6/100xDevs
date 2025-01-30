const express = require('express');
const router = express.Router();
const User = require('../db');
const zod = require('zod');
const jwt = require("jsonwebtoken");
const JWT_SECRET = require('../config');
const mongoose = require ("mongoose");

router.get('/',(req,res)=>{
    res.send('List of users');
});
const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string()
})
router.post("/signup", async(req,res)=>{
    const body  = req.body;
    const { success } = signupSchema.safeParse(body);
    if(!success){
        return res.json({
            message:"Email already taken / Incorrect inputs"
        })
    }
    const existingUser = await User.findOne({
        username: body.username
    })
    if(existingUser){
        return res.json({
            message: "Email already taken"
        })
    }
    const user = await User.create(body);

    const token = jwt.sign({userId: user._id},JWT_SECRET);
    res.json({
        message:"User created successfully",
        token: token
    })
})

module.exports = router;