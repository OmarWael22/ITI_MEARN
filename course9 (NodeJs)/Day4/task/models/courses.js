const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    depId: { type: mongoose.Schema.Types.ObjectId, ref: "Department" } // reference
});

module.exports = mongoose.model("Course", courseSchema);
