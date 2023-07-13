const express = require("express");
const app = express();
const mongoose = require("mongoose");
const BlogModel = require("./models/Blogs");

const PORT = 8080;
const MONGO_URI =
  "mongodb+srv://tartope:wGQjs0uOPuikHdiY@cluster0.x7ng6da.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, {
    // Options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Sets the name of the DB that our collections are part of
    dbName: "portfolio-template",
  })
  .then(() => {
    console.log("in the then");
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("in the catch");
    console.log("Error: Connecting to MongoDB: ", error);
  });

app.get("/getBlogs", async (req, res) => {
  try {
    const result = await BlogModel.find({});
    res.json(result);
    console.log(result);
  } catch (err) {
    res.json(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
