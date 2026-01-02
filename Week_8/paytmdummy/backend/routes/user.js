const express = require("express");

const router = express.Router();

router.get("/", (req,res)=>{
    res.json({
        msg:"Hello from user routed"
    })
})
router.post("/signup", (req,res) =>{
    const { username, password, firstname, lastname} = req.body;
    console.log(username);
    res.json({
        msg:`Hey ${firstname} we welcome you to paytm`
    })  
})
module.exports = router;