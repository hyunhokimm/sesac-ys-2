const express = require("express");
const port = 8000;
const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/ajax", (req, res) => {
  const user = req.query;
  res.send(user);
});

app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get("/axios", (req, res) => {
  res.send(req.query);
});

app.post("/axios", (req, res, next) => {
  //   res.status(500);
  res.send(req.body);
  //   next();
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
