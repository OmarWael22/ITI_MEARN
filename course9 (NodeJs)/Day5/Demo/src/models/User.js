const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  User_ID: {
    type: String,
    unique: true,
    required: true,
  },
  Name: {
    type: String,
    required: true,
    match: /^[A-Za-z]+( [A-Za-z]+)*/,
    maxLength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  password: {
    type: String,
    required: true,
    maxLength: 60,
    minLength: 6,
  },
  Age: {
    type: Number,
    max: 50,
    min: 18,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
  Subscription_Type: {
    type: String,
    required: true,
  },
  Favorite_Genre: {
    type: String,
    enum: [
      "Drama",
      "Sci-Fi",
      "Horror",
      "Action",
      "Documentary",
      "Comedy",
      "Romance",
    ],
  },
  isAdmin: { type: Boolean, default: false },
});

userSchema.pre("save", function (nxt) {
  const salt = bcrypt.genSaltSync(10);
  console.log(this);
  this.password = bcrypt.hashSync(this.password, salt);
  nxt();
});

userSchema.methods.generateTkn = (payload) => {
  const tkn = jwt.sign(payload, "myKeyTkn");
  if (!tkn) {
    return null;
  }
  return tkn;
};

module.exports = mongoose.model("users", userSchema);
