const express = require("express");
const cors = require("cors");
const app = express();
const { connectDb } = require("./connection");
const port = 5000;

// connect to database
connectDb();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

// listen server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
