const Ajv = require("ajv");
const ajv = new Ajv();

const schema = {
  type: "object",
  properties: {
    User_ID: {
      type: ["number", "string"],
    },
    Name: {
      type: "string",
      pattern: "^[A-Za-z]+( [A-Za-z]+)*$",
      maxLength: 20,
    },
    email: {
      type: "string",
      pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
    },
    password: {
      type: "string",
      maxLength: 60,
      minLength: 6,
    },
    Age: {
      type: "number",
      maximum: 50,
      minimum: 18,
    },
    Country: {
      type: "string",
      pattern: "^[A-Za-z]*$",
    },
    Subscription_Type: {
      type: "string",
    },
    Favorite_Genre: {
      type: "string",
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
    isAdmin: { type: "boolean", default: false },
  },
  required: [
    "User_ID",
    "Name",
    "email",
    "password",
    "Age",
    "Country",
    "Subscription_Type",
    "Favorite_Genre",
  ],
  additionalProperties: false,
};


module.exports = schema;

