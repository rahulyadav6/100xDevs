const mongoose = require("mongoose");
const env = require("./config");

const connectDB = async()=>{
    try{
        mongoose.connect(env.MONGO_URl);
        console.log("Connected to db");
        
    }catch(err){
        console.error("❌ MongoDB Connection Error:", err);
        process.exit(1); // Exit process with failure
    }
} 
module.exports = { connectDB };
