const express = require("express");
const cors = require("cors");

const app = express();
const apiRouter = require('./routes/api');
const PORT = 8080;

const corsOptions = {
  origin: ["http://localhost:3000"],
  optionsSuccessStatus: 200,
};

app.use(cors());

// Handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define route handlers
app.use('/api', apiRouter);

// Catch-all route handler for any requests to an unknown route
app.use((req, res)=> res.status(404).send('This is not the page you are looking for...'));


// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});


// Starts in index.js -> goes to api.js -> blogsController.js (which gets info about blog object (model) from Blogs.js)