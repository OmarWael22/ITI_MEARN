const express = require("express")
const router = express.Router()
const Course = require("../models/courses")
const courseAjvSchema = require("../utils/courseSchema");
const ajvValidation = require("../middlewares/ajvValidation");
// get api/courses
router.get("/", async (req, res) => {
    try {
        const courses = await Course.find({}).populate("depId","name -_id");
        res.json({msg:"success",courses})
    } catch (err) {
        res.status(500).json({msg:"Error",error:err})
    }
})
// get api/courses/1
router.get("/:id", async (req, res) => {
    try {
        const course = await Course.findOne({ id: parseInt(req.params.id) }).populate("depId","name -_id");
        if(!course)
            res.status(404).json({ msg: "Not Found!" });
        res.json({msg:"success",course})
    } catch (err) {
        res.status(500).json({ msg: "Error", error: err });
    }
});
// post
router.post("/",ajvValidation(courseAjvSchema), async (req, res) => {
    try {
        let data = req.body;
        let course = new Course(data);
        await course.save();
        res.json({ msg: "success", course });
    } catch (err) {
        res.status(500).json({ msg: "Error", error: err });
    }
});
// delete
router.delete("/:id", async (req, res) => {
    try {
        let targetId = parseInt(req.params.id)
        const course = await Course.deleteOne({ id: targetId });
        if (!course.deletedCount) {
            res.status(404).json({ msg: "Not Found!", description: course });
            return;
        }
        res.json({ msg: "success", course });
    } catch (err) {
        res.status(500).json({ msg: "Error", error: err });
    }
});
module.exports = router;