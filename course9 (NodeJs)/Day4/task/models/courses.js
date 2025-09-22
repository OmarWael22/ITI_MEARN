const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    id : { type : Number , required:true},
    title: { type: String, required: true },
    depId: { type: mongoose.Schema.Types.ObjectId, ref: "Department" } // reference
});

module.exports = mongoose.model("Course", courseSchema);
