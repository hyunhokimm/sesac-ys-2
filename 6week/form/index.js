const express = require("express");
const PORT = 8000;
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("form");
});

app.post("/user", (req, res) => {
  const user = req.body;
  console.log(user);
  res.render("userCreate", { user });
});

app.post("/validate", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
