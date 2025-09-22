const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: { 
        type: String, required: true 
    },
    age: Number,
    depId: { 
        type: mongoose.Schema.Types.ObjectId, ref: "Department" 
    }, 
    courses: [
        { 
            type: mongoose.Schema.Types.ObjectId, ref: "Course" 
        }
    ] 
});

module.exports = mongoose.model("Student", studentSchema);
