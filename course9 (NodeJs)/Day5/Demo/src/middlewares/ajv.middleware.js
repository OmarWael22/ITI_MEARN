const Ajv = require("ajv");
const ajv = new Ajv();

module.exports = (schema) => {
  return (req, res, nxt) => {
    const valid = ajv.validate(schema, req.body);
    if (!valid) {
      return res.json({ msg: "invalid data", err: ajv.errors });
    }
    nxt();
  };
};
