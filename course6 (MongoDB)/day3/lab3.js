use("FacultySystemV2")
db.students.insertMany([
    {
        firstName: "Ali",
        lastName: "Hassan",
        isFired: false,
        facultyId: 1,
        courses: [
            { courseId: 101, grade: 85 },
            { courseId: 102, grade: 90 }
        ]
    },
    {
        firstName: "Sara",
        lastName: "Mohamed",
        isFired: false,
        facultyId: 2,
        courses: [
            { courseId: 103, grade: 78 },
            { courseId: 104, grade: 88 }
        ]
    },
    {
        firstName: "Omar",
        lastName: "Khaled",
        isFired: true,
        facultyId: 1,
        courses: [
            { courseId: 101, grade: 40 },
            { courseId: 104, grade: 55 }
        ]
    }
])
db.faculties.insertMany([
    { facultyId: 1, facultyName: "Engineering", address: "Cairo" },
    { facultyId: 2, facultyName: "Science", address: "Alexandria" },
    { facultyId: 3, facultyName: "Business", address: "Giza" }
])
db.courses.insertMany([
    { courseId: 101, courseName: "Mathematics", finalMark: 100 },
    { courseId: 102, courseName: "Physics", finalMark: 100 },
    { courseId: 103, courseName: "Chemistry", finalMark: 100 },
    { courseId: 104, courseName: "Programming", finalMark: 100 }
])
/* 1 */
db.getCollectionInfos({ name: "students" })
db.students.runCommand("collMod", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["firstName","lastName" , "isFired" , "facultyId" , "courses"],
            additionalProperties: false,
            properties: {
                _id: {
                    bsonType: "number"
                },
                "firstName": {
                    bsonType: "string"
                },
                "lastName": {
                    bsonType: "string"
                },
                "isFired": {
                    bsonType: "bool"
                },
                "courses": {
                    bsonType: "array",
                    items : {
                        bsonType : "object"
                    }
                },

            }
        }
    },
    validationAction : "error",
    // error  -> default
    // warn -> insert / update
    validationLevel : "moderate"
    // strict 
    // off
    // moderate
    
    
})

db.getCollectionInfos({ name: "courses" })
db.students.runCommand("collMod", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["courseId" , "courseName" , "finalMark"],
            additionalProperties: false,
            properties: {
                _id: {
                    bsonType: "number"
                },
                "courseId": {
                    bsonType: "number"
                },
                "courseName": {
                    bsonType: "string"
                },
                "finalMark": {
                    bsonType: "number"
                }
               

            }
        }
    },
    validationAction : "error",
    // error  -> default
    // warn -> insert / update
    validationLevel : "moderate"
    // strict 
    // off
    // moderate
    
    
})

db.getCollectionInfos({ name: "faultyId" })
db.students.runCommand("collMod", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["facultyId" , "facultyName" , "address"],
            additionalProperties: false,
            properties: {
                _id: {
                    bsonType: "number"
                },
                "facultyId": {
                    bsonType: "number"
                },
                "facultyName": {
                    bsonType: "string"
                },
                "address": {
                    bsonType: "string"
                }

            }
        }
    },
    validationAction : "error",
    // error  -> default
    // warn -> insert / update
    validationLevel : "moderate"
    // strict 
    // off
    // moderate
    
    
})
/* 2 */
db.students.aggregate([
    { $project : { StudentInfo : { $concat : ["$firstName", " " , "$lastName" , " avgGrades : " ,  {$toString : {$avg : "$courses.grade"}} ] } }}
])
/* 3 */
db.courses.aggregate([
    {$project : { avgFullMark : {$avg : "$finalMark"}}}
])
/* 4 */
db.faculties.find({})