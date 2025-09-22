const express = require("express");
const Student = require("../models/students");

const router = express.Router();
// get  api/students
router.get("/", async (req, res) => {
    const students = await Student.find({})
        .populate("courses", "title -_id")
        .populate("depId", "name -_id");

    res.json({ msg: "success", students });
});
// get api/students/1
router.get("/:id", async (req, res) => {
    let targetId = parseInt(req.params.id);
    const targetStudent = await Student.findOne({ id: targetId }).exec();
    // console.log(targetStudent);
    if (!targetStudent) {
        res.status(404).json({msg: "Not Found"})
    }
    await targetStudent.populate("courses", "title -_id")
    await targetStudent.populate("depId","name -_id")
    res.json({ msg: "success", targetStudent });
});

// post api/student
// body student obj
// TODO: start from here
router.post("/", async (req, res) => {
    let data = req.body
    let newStudent = new Student(data);
    await newStudent.save()
    res.json({msg:"success" , data})
})

router.delete("/:id", async (req, res) => {
    try {
        let deleteCount = await Student.deleteOne({ id: req.params.id })
        if (deleteCount.deletedCount === 0) {
            res.status(404).json(deleteCount)
        }
        res.status(200).json(deleteCount)
    } catch(err) {
        res.status(500).json({error : err})
    }
})

module.exports = router;
