const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    id: {
        type: Number, required: true
    },
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
