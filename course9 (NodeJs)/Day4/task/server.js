let app = require("./app");
const mongoose = require("mongoose");
mongoose.connect(process.env.DB).then(()=>{
    console.log("DB connected");
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on port ${process.env.PORT}`);
    })
})