const express = require("express");
const router = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const { authMiddleware } = require("../middlewares");
const { User, Account } = require("../db");
const mongoose = require("mongoose");

router.get("/", (req, res) => {
  res.send("List of users");
});

const signupSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  firstname: zod.string(),
  lastname: zod.string(),
});
router.post("/signup", async (req, res) => {
  try {
    const body = req.body;

    console.log("Received Body:", body); // Debugging

    const { success } = signupSchema.safeParse(body);
    if (!success) {
      return res.status(400).json({ message: "Invalid input format" });
    }

    const existingUser = await User.findOne({ username: body.username });
    if (existingUser) {
      return res.status(400).json({ message: "Email already taken" });
    }

    // Create User
    const user = await User.create(body);
    console.log("User Created:", user);

    const userId = user._id;

    // Create Account
    const account = await Account.create({
      userId,
      balance: 1 + Math.random() * 10000,
    });

    console.log("Account Created:", account);

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    return res.json({ message: "User created successfully", token });
  } catch (error) {
    console.error("Signup Error:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

router.post("/signin", async (req, res) => {
  const body = req.body;
  const user = await User.findOne({
    username: body.username,
    password: body.password,
  });
  if (!user) {
    res.status(404).json({
      error: "Invaid username or password",
    });
  }
  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });
  res.status(202).json({
    message: "Logged in successfully",
    token: token,
  });
});

const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastname: zod.string().optional(),
});

router.put("/", authMiddleware, async (req, res) => {
  const { success, data } = updateBody.safeParse(req.body);

  if (!success) {
    return res.status(400).json({
      message: "Invalid data format",
      errors: data.error,
    });
  }

  try {
    const updatedUser = await User.updateOne(
      { _id: req.userId },
      { $set: data }
    );

    if (updatedUser.nModified === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      message: "Updated successfully",
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
