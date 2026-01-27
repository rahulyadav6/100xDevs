require("dotenv").config();

const ENV = {
    SECRET: process.env.JWT_SECRET,
    MONGO_URl : process.env.MONGO_URL,
    PORT : process.env.PORT
}

module.exports = ENV;