const { Router } = require('express');
const courseRouter = Router();

courseRouter.post('/signup',(req,res)=>{
    res.json({
        message: "signup route"
    })
})
courseRouter.post('/sign',(inreq,res)=>{
    res.json({
        message: "signin route"
    })
})

module.exports = {
    courseRouter: courseRouter
}