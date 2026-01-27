const express = require("express");
const app = express();
const port = 3000;
let users = [{
    name:"Rahul",
    kidneys:[{
        healthy:false
    }]
}]
app.use(express.json());

app.get("/",(req,res)=>{
    const rahulKidneys = users[0].kidneys;
    const numberOfKidneys = rahulKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0; i<rahulKidneys.length; i++){
        if(rahulKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys
    })
})

app.post("/",(req,res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })    
    res.json({
        msg:"Done!"
    })
})

app.put("/",(req,res)=>{
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

// removing all the unhealthy kidneys
app.delete("/",(req,res)=>{
    // do a check if there is not unhealthy kidneys and user is trying to remove the kidney then send him warning 
    // only if atleast one unheathy kidney is there do this, else return 411;

    if(isThereAtleastOneUnhealthyKidney()){
        const newKidneys = [];
        for(let i=0; i<users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy:true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg:"Unhealthy kidneys removes successfully"})
    }else{
        res.status(411).json({
            msg:"Sorry you don't have unhealthy kidney to remove."
        })
    }
})

function isThereAtleastOneUnhealthyKidney(){
    for(let i=0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            return true;
        }
    }
    return false;
}

app.listen(port);