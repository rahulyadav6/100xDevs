const express = require("express");
const app = express();
const port = 3000;


app.listen(port,(req,res)=>{
    console.log(`Listening to port ${port}`);
})

