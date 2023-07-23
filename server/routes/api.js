const express = require("express");
const blogsController = require("../controllers/blogsController");
const router = express.Router();


router.get("/getBlogs", blogsController.getBlogs, (req, res)=>
    res.status(200).json(res.locals)
);

router.get("/getBlog/:id", blogsController.getBlog, (req, res)=>
    res.status(200).json(res.locals)
);

router.post("/blog", blogsController.createBlog, (req, res)=>
    res.status(200).send({message: "Blog added successfully."})
);

router.put("/blog/:id", blogsController.updateBlog, (req, res)=>
    res.status(200).send({message: "Blog updated successfully."})
);

router.delete("/blog/:id", blogsController.deleteBlog, (req, res)=>
    res.status(200).send({message: "Blog deleted successfully."})
);


module.exports = router;