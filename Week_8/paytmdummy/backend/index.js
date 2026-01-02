const express = require("express");
require("dotenv").config();
const connectDB = require("./db.js");
const app = express();
const cors = require('cors');
const mainRouter = require("./routes/index.js");

connectDB();

app.use(cors());
app.use(express.json());


app.use("/api/v1", mainRouter);

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});