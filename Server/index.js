const express = require("express");
const cors = require("cors");
const app = express();
const { connectDb } = require("./connection");
const BlogPost = require("./models/BlogPost");
const port = 5000;

// connect to database
connectDb();

// middlewares
app.use(express.json());
app.use(cors());

// routes

// routes 1 : post blog
app.post("/post-blog", async (req, res) => {
  let blog = new BlogPost({
    title: req.body.title,
    description: req.body.description,
  });

  await blog.save();

  res.json({ message: "Blog post created successfully", blog });
});

// routes 2 : getting all blogs
app.get("/get-blogs", async (req, res) => {
  let blogs = await BlogPost.find();
  if (!blogs) {
    res.status(404).json({ message: "No blog post found" });
  }

  res.json({ blogs });
});

// routes 3 : delete blog
app.delete("/delete-blog/:id", async (req, res) => {
  let blog = await BlogPost.findByIdAndDelete(req.params.id);
  if (!blog) {
    res.status(404).json({ message: "No blog post found" });
  }

  res.status(200).json({ message: "Blog post deleted successfully" });
});

// routes 4 : update blog
app.put("/update-blog/:id", async (req, res) => {
  let blog = await BlogPost.findByIdAndUpdate(req.params.id);
  if (!blog) {
    res.status(404).json({ message: "No blog post found" });
  }
  if (!req.body.title && !req.body.description) {
    res.status(400).json({ message: "Please provide data to update" });
  } else if (!req.body.title) {
    blog.description = req.body.description;
  } else if (!req.body.description) {
    blog.title = req.body.title;
  } else {
    blog.title = req.body.title;
    blog.description = req.body.description;
  }

  await blog.save();
  res.json({ message: "Blog post updated successfully", blog });
});

// listen server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
