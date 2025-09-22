const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    id: {type : Number , required : true},
    name: { type: String, required: true }
});

module.exports = mongoose.model("Department", departmentSchema);
