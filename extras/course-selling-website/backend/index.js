const express = require("express");
const env = require("./config");
const { connectDB } = require("./db");
const mainRouter = require('./routes/index');

const port = env.PORT || 3000;
const app = express();


app.use(mainRouter);


connectDB();
app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})
