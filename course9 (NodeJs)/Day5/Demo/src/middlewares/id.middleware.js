module.exports = (req, res, nxt, val) => {
  // hexa => 12byte => 24digit
  if (!/^[a-fA-F0-9]{24}$/.test(val)) {
    return res.json({ msg: "id  not valid" });
  } else {
    req.id = val;
    nxt();
  }
};
