const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/ig/:username", (req, res) => {
  const { username } = req.params;
  const instaData = require("./data.json");
  const data = instaData[username];
  console.log(data);
  res.render("igInstragram.ejs", { data });
});

app.get("/rolldice", (req, res) => {
  const random = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { random });
});

app.listen(3000, () => console.log("server started..."));
