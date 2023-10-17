const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/get", (req, res) => {
  console.log(req.query);
  res.send("요청 성공");
});

app.get("/account", (req, res) => {
  console.log(req.query);
});

app.listen(PORT, () => console.log(`http://localhost:8000`));
