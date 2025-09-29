const AJV = require("ajv");
const ajv = new AJV();
const ajvValidation = (schema) => {
    return (req, res, next) => {
        const valid = ajv.validate(schema, req.body);
        if (!valid) {
            return res.status(400).json({
                status: "Fail",
                msg: "InValid Data",
                data: ajv.errors
            })
        }
        next();
    }
}

module.exports = ajvValidation;