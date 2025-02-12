const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'random123';
const app = express();

app.use(express.json());
const auth = (req,res,next)=>{
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);
    if(decodedData.username){
        req.username = decodedData.username;
        next();
    }else{
        return res.json({error:"You are not logged in"})
    }
}
const users = [];

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
})
app.post('/signup',(req,res)=>{
    const { username, password } = req.body;
    users.push({username,password});
    res.json({message: "You are signed up"});
})

app.post('/signin', (req,res)=>{
    const { username, password } = req.body;
    let foundUser = null;
    for(let i=0; i<users.length; i++){
        if(users[i].username === username && users[i].password === password){
            foundUser = users[i];
        }
    }
    if(!foundUser){
        res.json({
            message: "Credentials incorrect"
        })
    }else{
        const token = jwt.sign({username}, JWT_SECRET);
        res.header('jwt', token);
        res.json({
            token: token
        })
    }
});

app.get('/me',auth, (req,res)=>{
    let foundUser = null;
    for(let i=0;i<users.length; i++){
        if(users[i].username === req.username){
            foundUser = users[i];
        }
    }
    res.json({
        username: foundUser.username,
        password: foundUser.password
    })
})


app.listen(3000,()=>{
    console.log(`Listening to port 3000`);
})