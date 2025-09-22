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
        { id:1 , name: "Computer Science" },
        { id:2 ,name: "Information Systems" },
        ]);

        // Insert courses (store references)
        const node = await Course.create({
        id : 1,
        title: "Node.js",
        hours: 40,
        depId: csDep.id,
        });

        const db = await Course.create({
        id : 2,
        title: "Database Systems",
        hours: 20,
        depId: isDep.id,
        });

        const cpp = await Course.create({
        id : 3,
        title: "C++ OOP",
        hours: 70,
        depId: csDep.id,
        });

        // Insert students
        await Student.insertMany([
            {   
            id : 1,
            name: "Omar",
            age: 22,
            depId: csDep._id,
            courses: [node._id, cpp._id],
        },
            {   
            id : 2,
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


