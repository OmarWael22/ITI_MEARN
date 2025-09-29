// setup express
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
// const userRouter = require("./src/routes/userRouter");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 // ROUTERS
const studentRouter = require("./routes/students")
const courseRouter = require("./routes/courses")
const depRouter = require("./routes/depart")
// students route
app.use("/api/students",studentRouter);
// courses route
app.use("/api/courses",courseRouter);
// department route
app.use("/api/departments",depRouter);
app.use("/",(req,res)=>{
    res.status(404).json({
        status: "Fail",
        msg:"Not Found!"
    })
})

module.exports = app;