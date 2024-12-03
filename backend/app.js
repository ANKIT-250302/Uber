const dotenv = require("dotenv");
const connectDB = require("./db/db")
dotenv.config()
const express = require("express");
const cors =require("cors")
const app =express();
const cookieParser = require("cookie-parser")
const userRoutes = require("./routes/user.routes")
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
connectDB()
app.use(cookieParser())
app.get("/",(req,res)=>{
    res.send("Hello");
})

app.use("/users",userRoutes);

module.exports = app;