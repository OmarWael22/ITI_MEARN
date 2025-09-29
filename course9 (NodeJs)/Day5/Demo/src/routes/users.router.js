//#region require
const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  addUser,
  delUser,
  updateUser,
} = require("../controllers/users.controller");
const userSchema = require("../utils/user.validator");
const idvalidate = require("../middlewares/id.middleware");
const ajvMiddleware = require("../middlewares/ajv.middleware");
const auth = require("../middlewares/auth.middleware");

//#endregion require

router.param("id", idvalidate);

// all users
router.get("/", auth, getAllUsers);

// user by id
router.get("/:id", getUserById);

// update user by id
router.put("/:id", ajvMiddleware(userSchema), updateUser);

// delete user
router.delete("/:id", delUser);

module.exports = router;
