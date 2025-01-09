const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin%40123@cluster0.rgdkn.mongodb.net/userappnew")

const User = mongoose.model('Users', {name: String, email: String, password: String});


const user = new User({
    name:"Rahul Yadav",
    email:"ry573870@gmail.com",
    password:"123456"
});
user.save();