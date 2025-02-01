const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const accountRouter = require('./account');

router.use("/user", userRouter);
router.use("/account", accountRouter);

// router.get('/users',(req,res)=>{
//     res.send('List of users');
// });

module.exports = router;