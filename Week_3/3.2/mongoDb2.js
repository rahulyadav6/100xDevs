const express = require("express");
const app = express();

app.use(express.json());

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin%40123@cluster0.rgdkn.mongodb.net/userappnew")

const User = mongoose.model('Users', {name: String, email: String, password: String});

app.post("/signup", async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    console.log(username);

    const existingUser = await User.findOne({email: username})
    if(existingUser){
        return res.status(400).send("Username already exists");
    }

    const user = new User({
        name:name,
        email: username,
        password:password
    });
    user.save();
    res.status(200).json({msg:"Added to DB"});
})


app.listen(3000); 