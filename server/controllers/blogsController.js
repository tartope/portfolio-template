const BlogModel = require("../models/Blogs");
// const models = require("../models/Blogs");

const blogsController = {};

// GET all blogs
blogsController.getBlogs = async (req, res) => {
  try {
    // Assign blogs result to variable to return json result
    const result = await BlogModel.find({});
    res.json(result);
    // console.log(result);
  } catch (err) {
    res.json(err);
  }
};

// GET one blog by id
blogsController.getBlog = async (req, res) => {
  try {
    // Grab id parameter of blog
    const blogId = req.params.id;
    // Assign result to variable to return json result
    const result = await BlogModel.findById(blogId).exec();
    res.json(result);
    // console.log(result)
  } catch (err) {
    res.json(err);
  }
};

// Add a blog
blogsController.createBlog = async (req, res) => {
  try {
    // Destructure and properties of object body to variables
    const { title, content } = req.body;
    // Assign new blog to variable
    const newBlog = await new BlogModel({ title, content });
    // Save to db
    newBlog.save();
    return res
      .status(200)
      .send({ message: "Blog has been added!", data: newBlog });
  } catch (err) {
    return res
      .status(400)
      .send({ message: "Error occured!", error: err.message });
  }
};

// Update a blog
blogsController.updateBlog = async (req, res) => {
  try {
    // Grab id parameter of blog
    const blogId = req.params.id;
    // Destructure and assign properties of object body to variables
    const { title, content } = req.body;
    // find blog by id and update using properites of object body
    await BlogModel.findByIdAndUpdate(blogId, { title, content });
    return res.status(200).send({ message: "Blog has been updated!" });
  } catch (err) {
    return res
      .status(400)
      .send({ message: "Error occured in update!", error: err.message });
  }
};

// Delete a blog
blogsController.deleteBlog = async (req, res) => {
  try {
    // Grab id parameter of blog
    const blogId = req.params.id;
    // Assign deleted blog to variable
    const deleteBlog = await BlogModel.findByIdAndDelete(blogId);
    // Send response with deleted blog
    res.send(deleteBlog).status(200);
  } catch (err) {
    return res
      .status(400)
      .send({ message: "Error occured with delete!", error: err.message });
  }
};

module.exports = blogsController;
