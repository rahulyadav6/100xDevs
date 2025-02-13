const { Router } = require('express');
const userRouter = Router();

userRouter.post('/signup',(req,res)=>{
    res.json({
        message: "signup route"
    })
})
userRouter.post('/sign',(inreq,res)=>{
    res.json({
        message: "signin route"
    })
})

module.exports = {
    userRouter: userRouter
}