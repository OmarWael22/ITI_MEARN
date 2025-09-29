const User = require("../models/User");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { email } = req.body;
    const existemail = await User.findOne({ email });
    if (existemail) {
      res.status(409).json({ msg: "user is already exist" }); //
    }
    // hash password
    // lab -> search
    const user = new User(req.body);
    await user.save();
    // res.cookie("token", "user");
    const tkn = user.generateTkn({
      email: req.body.email,
      isAdmin: user.isAdmin,
    });

    res.cookie("tkn", tkn, {
      httpOnly: true,
    });

    res.set("Authorization", "Bearer " + tkn);
    res.status(201).json({ msg: "signup", user, tkn });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "internal server error", err });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existemail = await User.findOne({ email });
    if (!existemail) {
      res.status(409).json({ msg: "invalid email , password" }); //
    }
    const validPass = bcrypt.compareSync(password, existemail.password);
    if (!validPass) {
      res.status(409).json({ msg: "invalid email , password" });
    }
    const tkn = existemail.generateTkn({
      email: req.body.email,
      isAdmin: existemail.isAdmin,
    });
    res.set("Authorization", "Bearer " + tkn);
    res.status(201).json({ msg: "signup", existemail });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "internal server error", err });
  }
};

module.exports = {
  signup,
  signin,
};
