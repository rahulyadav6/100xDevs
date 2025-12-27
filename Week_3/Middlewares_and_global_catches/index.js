const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const jwtPassword = "123456"
app.use(express.json());
const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name:"harkirat singh"
    },
    {
        username: "rahul@gmail.com",
        password: "123",
        name:"Rahul Yadav"
    },
    {
        username: "kaushal@gmail.com",
        password: "123",
        name:"Kaushal Thakur"
    },
];

function userExist(username,password){
    let userExist =  ALL_USERS.find((user)=>{
        return user.username === username && user.password === password;
    })
    return userExist;
}

app.post("/signin", function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    if(!userExist(username, password)){
        return res.status(403).json({
            msg:"User doesn't exits in our in memory db",
        });
    }
    let token = jwt.sign({username:username}, jwtPassword);
    return res.json({
        token,
    });
});
app.get("/users", function(req,res){
    const token = req.headers.authorization;
    console.log(token);
    
    try{
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        res.json({
            users:ALL_USERS.filter((user) => user.username !== username)
        })
    }catch(err){
        return res.status(403).json({
            msg:"Invalid token",
        })
    }
});

app.listen(3000);
