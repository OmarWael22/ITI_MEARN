const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      return res.status(200).json({ msg: "not found" });
    }
    res.status(200).json({ msg: "success", users });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "internal server error" });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.id);
    console.log(user);
    if (!user) {
      return res.status(200).json({ msg: "not found" });
    }
    res.status(200).json({ msg: "success", user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "internal server error" });
  }
};

const updateUser = (req, res) => {
  res.send("/:id => update user by id");
};

const delUser = (req, res) => {
  res.send("/:id => delete user by id");
};

module.exports = {
  getAllUsers,
  getUserById,
  delUser,
  updateUser,
};
