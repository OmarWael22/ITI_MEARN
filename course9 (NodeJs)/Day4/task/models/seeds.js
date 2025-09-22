/**********      DB    ******************** */
const mongoose = require("mongoose");
const Student = require("./students");
const Course = require("./courses");
const Department = require("./department");

(async function DBConnection() {
    try {
        await mongoose.connect(process.env.DB);
        console.log("DB connected");
        // clear existing data
        await Student.deleteMany({});
        await Course.deleteMany({});
        await Department.deleteMany({});
        // Insert departments
        const [csDep, isDep] = await Department.insertMany([
        { name: "Computer Science" },
        { name: "Information Systems" },
        ]);

        // Insert courses (store references)
        const node = await Course.create({
        title: "Node.js",
        hours: 40,
        depId: csDep._id,
        });

        const db = await Course.create({
        title: "Database Systems",
        hours: 20,
        depId: isDep._id,
        });

        const cpp = await Course.create({
        title: "C++ OOP",
        hours: 70,
        depId: csDep._id,
        });

        // Insert students
        await Student.insertMany([
        {
            name: "Omar",
            age: 22,
            depId: csDep._id,
            courses: [node._id, cpp._id],
        },
        {
            name: "Sara",
            age: 21,
            depId: isDep._id,
            courses: [db._id],
        },
        ]);

        console.log("Sample data inserted ✅");
        console.log(await Student.find({}));
        console.log(await Course.find({}));
        console.log(await Department.find({}));
        await mongoose.disconnect();
    } catch (err) {
        console.error(err);
    }
})();


