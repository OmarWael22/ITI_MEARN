const jwt = require("jsonwebtoken");

module.exports = (req, res, nxt) => {
  console.log(req.headers);
  const tkn = req.headers.authorization?.split(" ")[1];
  if (!tkn) {
    res.json({ msg: "not auth" });
  }
  const obj = jwt.verify(tkn, process.env.TKN_KEY);
  let isAdmin = obj.isAdmin;
  console.log(isAdmin);
  nxt();
};
