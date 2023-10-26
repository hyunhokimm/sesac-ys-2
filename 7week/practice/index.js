const express = require("express");
const app = express();
const PORT = 8000;
const userRoute = require("./routes/userRoute");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/user", userRoute);
app.get("/account", (req, res) => {
  res.render("account");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
