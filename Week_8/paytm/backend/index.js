const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken");




const mainRouter = require('./routes/index');

/* cors */
app.use(cors({
    // origin:"http://localhost:5173"
}));

/* body parser */
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to paytm</h1>")
})

/* route middleware */
app.use("/api/v1", mainRouter);

app.listen(port,(req,res)=>{
    console.log(`Listening to port ${port}`);
})

