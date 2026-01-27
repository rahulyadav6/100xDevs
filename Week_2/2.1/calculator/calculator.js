const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 3001;


app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.post("/",(req,res)=>{
    let num1 = Number(req.body.num1);
    let num2 =Number(req.body.num2);
    let result = num1 + num2;
    res.send(`The result of the calcualtion is ${result}`);
})



/* bmi calculator sarts here */
app.get("/bmicalculator", (req,res)=>{
    res.sendFile(__dirname + "/bmi_calculator.html");
})
app.post("/bmicalculator", (req,res)=>{
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let bmi = weight/(height * height);
    res.send(`Your weight is ${weight} and your height is ${height} and your BMI is ${bmi}`);
    
})
/* bmi calcluator ends here */


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})