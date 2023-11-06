const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

let posts = [
  {
    username: "ghost",
    content: "i love coding ",
  },
  {
    username: "xyg",
    content: "i got selected for my first internship",
  },
  {
    username: "abc",
    content: "i love watching movies ",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("postform.ejs");
});

app.post("/posts", (req, res) => {
  const { username, textarea } = req.body;
  console.log(username, textarea);
  posts.push({ username, content: textarea });
  res.redirect("/posts");
});

app.listen(port, () => console.log(`server running on port ${port}`));
