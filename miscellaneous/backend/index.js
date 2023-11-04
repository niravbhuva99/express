const express = require("express");

const app = express();
const port = 3000;

app.get("/register", (req, res) => {
  const { user, password } = req.query;
  res.send(`standard get request , welcome ${user}`);
});

app.post("/register", (req, res) => {
  res.send("standard post request");
});

app.listen(port, () => console.log("server started at port 3000"));
