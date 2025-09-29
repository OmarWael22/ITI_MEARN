const app = require("./app");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5050;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("db connected");
    app.listen(PORT, () => {
      console.log("http://localhost:" + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
