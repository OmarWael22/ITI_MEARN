use ITI

let instructorsArray = [
  {
    id: 1,
    firstName: "noha",
    lastName: "hesham",
    age: 21,
    salary: 3500,
    address: { city: "cairo", street: 10, building: 8 },
    courses: ["js", "mvc", "signalR", "expressjs"],
  },

  {
    id: 2,
    firstName: "mona",
    lastName: "ahmed",
    age: 21,
    salary: 3600,
    address: { city: "cairo", street: 20, building: 8 },
    courses: ["es6", "mvc", "signalR", "expressjs"],
  },

  {
    id: 3,
    firstName: "mazen",
    lastName: "mohammed",
    age: 21,
    salary: 7040,
    address: { city: "Ismailia", street: 10, building: 8 },
    courses: ["asp.net", "mvc", "EF"],
  },

  {
    id: 4,
    firstName: "ebtesam",
    lastName: "hesham",
    age: 21,
    salary: 7500,
    address: { city: "mansoura", street: 14, building: 3 },
    courses: ["js", "html5", "signalR", "expressjs", "bootstrap"],
  },

  {
    id: 5,
    firstName: "ahmed",
    lastName: "ali",
    age: 30,
    salary: 5000,
    address: { city: "alexandria", street: 5, building: 12 },
    courses: ["python", "django", "flask"],
  },

  {
    id: 6,
    firstName: "sara",
    lastName: "kamal",
    age: 27,
    salary: 4200,
    address: { city: "cairo", street: 22, building: 6 },
    courses: ["angular", "typescript", "rxjs"],
  },

  {
    id: 7,
    firstName: "omar",
    lastName: "waled",
    age: 25,
    salary: 6700,
    address: { city: "giza", street: 18, building: 9 },
    courses: ["react", "redux", "nextjs"],
  },

  {
    id: 8,
    firstName: "yasmine",
    lastName: "fathy",
    age: 29,
    salary: 5800,
    address: { city: "cairo", street: 30, building: 15 },
    courses: ["java", "spring boot", "hibernate"],
  },

  {
    id: 9,
    firstName: "mohamed",
    lastName: "hosny",
    age: 35,
    salary: 8200,
    address: { city: "aswan", street: 8, building: 2 },
    courses: ["nodejs", "expressjs", "mongodb"],
  },

  {
    id: 10,
    firstName: "laila",
    lastName: "tarek",
    age: 26,
    salary: 4600,
    address: { city: "cairo", street: 12, building: 4 },
    courses: ["ui/ux", "figma", "css", "tailwind"],
  },
];
/*6*/
db.instructor.deleteMany({})
db.instructor.insert(instructorsArray)
//// lab 1
///* 7 */
//db.instructor.find();
//
//db.instructor.find({},{firstName : 1 ,lastName : 1 , address :1 })
//
//db.instructor.find( {age : { $eq : 21}} , {firstName : 1 , "address.city" : 1})
//
//db.instructor.find({"address.city" : {$eq : "mansoura" }} , {firstName : 1 , age : 1})
//
///* try this */
//db.instructor.find( {firstName : "mona"}, {lastName : "ahmed"} , {firstName :1 , lastName :1})
//db.instructor.find( {_id : ObjectId("68b01b3f73e79ce839441532") })
//db.instructor.find( {firstName : "mona" , lastName : "ahmed"})
//
//db.instructor.find({courses:"mvc"} , {firstName :1 , courses : 1})
//db.instructor.find ({courses : {$in : ["mvc"]}} , {firstName :1 , courses : 1})

// lab 2
/* a */
db.instructor.find({})
/* b */
db.instructor.find({salary : {$gt : 4000}} , {firstName : 1 , salary : 1})
/* c */
db.instructor.find({age : { $lte : 25}} , {firstName :1 , age : 1})
/* d */
db.instructor.find({"address.city" : "mansoura" , "address.street" : { $in : [10,14]} } , {firstName : 1 , address : 1 , salary : 1})
/* e */
db.instrcutor.find({courses : { $all : ["js" , "jquery"] } })
/* f */
db.instructor.find({}).forEach( (inst) => {
    print(`${inst.firstName} ${inst.courses?.length}`)
})
/* g */
db.instructor.find({}).sort({firstName : 1 ,lastName : -1}).forEach( function(inst){
    print(`FullName : ${inst.firstName} ${inst.lastName} , Age : ${inst.age}`)
    })
/* bonus */
const res = db.instructor.find({},{_id : 0}).sort({firstName : 1 ,lastName : -1});
db.instructorsData.insertMany(res.toArray())
db.instructorsData.find({})
/* h */
db.instructor.find({ $or : [ {firstName : { $regex : "moham+ed" , $options : "i"} } , {lastName : { $regex : "moham+ed" , $options : "i"} } ] })
/* i */
db.instructor.find({firstName : "ebtesam" , courses : { $size : 5 }})
db.instructor.deleteMany({firstName : "ebtesam" , courses : { $size : 5 }})
/* j */
db.instructor.updateMany({}, {$set : {active : true}})
db.instructor.find({})
/* k */
db.instructor.updateMany({firstName : "mazen" , lastName : "mohammed" , courses : "EF"}, {$set : {"courses.$" : "jquery"}})
/* l */
db.instructor.updateOne({firstName : "noha" , lastName : "hesham"}, {$push : { courses : "jquery"}})
/* m */
db.instructor.updateOne({firstName : "mazen" , lastName : "mohammed"} , { $unset : { courses : "any"} })
/* n */
db.instructor.updateMany({courses : {$size : 3}} , {$inc : {salary : 500}})
db.instructor.find({courses : {$size : 3}} )
/* o */
db.instructor.updateMany({}, { $rename : {address : "FullAddress"}})
/* p */

db.instructor.updateOne({firstName : "noha" , lastName: "hesham"}, {$set : {"FullAddress.street" : 20}})

/* slice */
db.instructor.find({},{courses : { $slice : 2} })
/* each */
//he $each modifier is available for use with the $addToSet operator and the $push operator.
db.instructor.updateOne({id : 1 }, {$push : {courses : { $each : ["html" ,"css" ,"js"]}}})
/* position */
db.instructor.updateOne({id : 1 }, {$push : {courses : { $each: ["htmlf" ,"cssf" ,"jswd"] , $slice : -2 }}})
db.instructor.find({})
