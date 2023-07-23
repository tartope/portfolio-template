const mongoose = require("mongoose");

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
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error: Connecting to MongoDB: ", error);
  });

const Schema = mongoose.Schema;

// Sets a schema for the 'blogs' collection
const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Sets the createdAt parameter equal to the current time
BlogSchema.pre("save", (next) => {
  now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

// Creates a model for the 'blogs' collection that will be part of the export
const BlogModel = mongoose.model("blogs", BlogSchema);
module.exports = BlogModel;
