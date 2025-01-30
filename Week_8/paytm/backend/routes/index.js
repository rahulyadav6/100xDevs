const express = require('express');
const router = express.Router();
const userRouter = require('./user');

router.use("/user", userRouter);

// router.get('/users',(req,res)=>{
//     res.send('List of users');
// });

module.exports = router;