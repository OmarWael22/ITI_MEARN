const express = require("express")
const router = express.Router()
const Course = require("../models/courses")
// get api/courses
router.get("/",async (req,res)=>{
    const courses  = await Course.find({})
    res.json({msg:"success",courses})
})

module.exports = router;