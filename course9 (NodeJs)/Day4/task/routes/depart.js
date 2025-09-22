const express = require("express");
const router = express.Router();
const Department = require("../models/department");

// get api/departments 
router.get("/",async (req,res)=>{
    const dep = await Department.find({});
    res.json(dep)
} )

module.exports = router;