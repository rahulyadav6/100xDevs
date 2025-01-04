const express = require('express')
const app = express()
const port = 3000

function calculateSum(counter){
    let sum = 0;
    for(let i=0; i<=counter; i++){
        sum +=i;
    }
    return sum;
}
app.get('/handlesum', (req, res) => {
  let counter = req.query.counter;
  let  calculatedSum = calculateSum(counter);
  let answer = `The sum is ${calculatedSum};`
  res.send(`Hello to the 100xdevs class! ${answer}`)
})

function createUser(){
  res.send("Hello world!");
}
app.post('/creteUser', createUser);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
