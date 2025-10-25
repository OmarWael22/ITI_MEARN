const express = require("express");
const cors = require("cors");
const { createHandler } = require("graphql-http/lib/use/express");
const { ruruHTML } = require("ruru/server");
const schema = require("./graphql/schema");

const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});
const formatError = (err) => {
  if (!err.originalError) {
    return err;
  } else {
    const data = err.originalError.data;
    const code = err.originalError.code;
    const message = err.message;
    return {
      message,
      code,
      data,
    };
  }
};

app.all(
  "/graphql",
  createHandler({
    schema,
    formatError,
  })
);

// Simple landing route
app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

app.listen(3000, () => console.log("Server started on port 3000"));
