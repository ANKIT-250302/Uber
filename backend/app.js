const dotenv = require("dotenv");
const connectDB = require("./db/db")
dotenv.config()
const express = require("express");
const cors =require("cors")
const app =express();
app.use(cors());

connectDB()
app.get("/",(req,res)=>{
    res.send("Hello");
})

module.exports = app;