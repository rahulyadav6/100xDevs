const express = require("express");
const { authMiddleware } = require("../middleware");
const Account = require("../models/account");
const { default: mongoose } = require("mongoose");
const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });
  if(!account){
    return res.status(404).json({
        message:"Account not found"
    })
  }
  res.json({
    balance: account.balance,
  });
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();
  try {

    session.startTransaction();

    const { amount, to } = req.body;

    if (amount <= 0) {
      throw new Error("Invalid amount")
    }

    const account = await Account.findOne({ userId: req.userId }).session(session);
    if (!account || account.balance < amount) {
      throw new Error("Insufficient balance")
    }
    
    const toAccount = await Account.findOne({ userId: to }).session(session);
    if (!toAccount) {
      throw new Error("Invalid account");
    }

    if (to === req.userId) {
      throw new Error("Cannot transfer to self");
    }


    // transfer money
    await Account.updateOne({ userId: req.userId },{ $inc: { balance: -amount }}).session(session);
    await Account.updateOne({ userId: to },{ $inc: { balance: amount }}).session(session);

    // commit the transaction
    await session.commitTransaction();
    res.json({
        message: "Transfer successful",
    });
  } catch (error) {
    await session.abortTransaction();
    res.status(400).json({
        message: error.message
    })
  }finally{
    session.endSession();
  }
});
module.exports = router;
