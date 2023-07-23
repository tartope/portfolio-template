const BlogModel = require("../models/Blogs");
// const models = require("../models/Blogs");

const blogsController = {};

// GET all blogs
blogsController.getBlogs = async (req, res) => {
  try {
    const result = await BlogModel.find({});
    res.json(result);
    // console.log(result);
  } catch (err) {
    res.json(err);
  }
};

// GET one blog by id
blogsController.getBlog = async (req, res) => {
  const blogId = req.params.id;
  try {
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
    const { title, content } = req.body;
    const newBlog = await new BlogModel({ title, content });
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
    const blogId = req.params.id;
    const { title, content } = req.body;
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
    const blogId = req.params.id;
    const deleteBlog = await BlogModel.findByIdAndDelete(blogId);
    res.send(deleteBlog).status(200)
  } catch (err) {
    return res
      .status(400)
      .send({ message: "Error occured with delete!", error: err.message });
  }
};

module.exports = blogsController;
