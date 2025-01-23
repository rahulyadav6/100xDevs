const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();
app.use(cors);
app.use(express.json());

app.use("/admin",adminRouter)
app.use("/user",userRouter)

mongoose.connect("mongodb+srv://admin:u4aAj4xkj2QZfoap@cluster0.npomqzy.mongodb.net/courses")

app.listen(3000, ()=>console.log('Server runnig on port 3000'));