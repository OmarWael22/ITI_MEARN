const express = require("express");
const router = express.Router();
const userSchema = require("../utils/user.validator");
const loginSchema = require("../utils/login.validator");
const ajvMiddleware = require("../middlewares/ajv.middleware");
const { signup, signin } = require("../controllers/auth.controller");

// register
router.post("/register", ajvMiddleware(userSchema), signup);

// login -> validate
router.post("/login", ajvMiddleware(loginSchema), signin);

module.exports = router;
