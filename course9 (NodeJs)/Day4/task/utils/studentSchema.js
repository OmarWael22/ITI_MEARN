const studentAjvSchema = {
    type: "object",
    properties: {
        id: { type: "number" },
        name: { type: "string" },
        age: { type: "number" },
        depId: {
        type: "string",
        pattern: "^[0-9a-fA-F]{24}$",
        },
        courses: {
        type: "array",
        items: {
            type: "string",
            pattern: "^[0-9a-fA-F]{24}$",
        },
        },
    },
    required: ["id", "name"],
    additionalProperties: false,
};
module.exports = studentAjvSchema;