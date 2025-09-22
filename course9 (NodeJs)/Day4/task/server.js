let app = require("./app");
// let seeds = require("./models/seeds");
const mongoose = require("mongoose");
console.log(process.env.DB);
mongoose.connect(process.env.DB).then(()=>{
    console.log("DB connected");
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on port ${process.env.PORT}`);
    })
})