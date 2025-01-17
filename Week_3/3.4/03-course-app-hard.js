const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const secret = "sup3rsecr3t";

//Define mongodb schema

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    purchasedCourses: [{type: mongoose.Schema.Types.ObjectId, ref: 'Course'}]
});

const adminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
})