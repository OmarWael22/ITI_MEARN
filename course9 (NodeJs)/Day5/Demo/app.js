// Routing - MVC - Authentication - Authorization
// ===============================================
//#region require
const express = require("express");
const dotenv = require("dotenv").config();
const helmet = require("helmet");
const userRouter = require("./src/routes/users.router");
const authRouter = require("./src/routes/auth.router");
const app = express();
//#endregion require

// app.set("strict routing", true);
// app.enable("strict routing");
// app.set("case sensitive routing", true);
// app.enable("strict routing");

app.use(express.urlencoded({ extended: true })); // parse urlencode -> form
app.use(express.json()); // parse body
// cors
// helmet
app.use(helmet());

app.get("/api", (req, res) => {
  res.send("Welcome to our API");
});

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

// MVC -> Model - View [ejs (template)] - Controller - Routes - Middlewares - utils(Helper)
// app.all("/*not", (req, res) => {
//   res.send("not found *");
// });

app.use((req, res) => {
  res.send("not found use");
});

module.exports = app;
