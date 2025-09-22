const express = require("express");
const router = express.Router();
const Department = require("../models/department");

// get api/departments 
router.get("/", async (req, res) => {
    try {
        const dep = await Department.find({});
        res.json(dep)
    } catch (error) {
        res.status(500).send(error)
    }
})
// get api/departments/1
router.get("/:id", async (req, res) => {
    try {
        let targetId  = parseInt(req.params.id)
        const dep = await Department.findOne({ id: targetId });
        if (!dep) {
            res.status(404).json({ msg: "Not Found!" })
            return;
        }
        res.json({msg:"success", department:dep})
    } catch (error) {
        res.status(500).send(error)
    }
})
router.post("/", async (req, res) => {
    try {
        let data = req.body
        let newDep = new Department(data);
        await newDep.save();
        res.status(201).json({msg:"success", department:newDep})
    } catch (error) {
        res.status(500).send(error)
    }
})
router.delete("/:id", async (req, res) => {
    try {
        let targetId = parseInt(req.params.id)
        let result = await Department.deleteOne({ id: targetId })
        if (!result.deletedCount) {
            res.status(404).json({ msg: "Not Found", result })
            return
        }
        res.json({msg:"success", result})
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router;