const courseAjvSchema = {
    type: "object",
    properties: {
        id: { type: "number" },
        title: { type: "string" },
        
        depId: {
        type: "string",
        pattern: "^[0-9a-fA-F]{24}$",
        }
    },
    required: ["id", "title"],
    additionalProperties: false,
};
module.exports = courseAjvSchema;
