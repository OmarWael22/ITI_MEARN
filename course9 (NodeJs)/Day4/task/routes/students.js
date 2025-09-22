const express = require("express")
const Student = require("../models/students");

const router = express.Router();
// get  api/students
router.get("/", async(req,res)=>{
    const students = await Student.find({})
    res.json({msg:"sucess", students})
})
// get api/students/1
// router.get("/:id")

module.exports = router