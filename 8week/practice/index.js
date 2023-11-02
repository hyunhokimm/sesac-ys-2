const express = require("express");
const app = express();
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const db = require("./models");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("account");
});

app.use("/user", userRoute);
app.use("/product", productRoute);

db.sequelize.sync().then((res) => {
  console.log("db에 연결되었습니다.");
});

app.listen(8000, () => {
  console.log(`http://localhost:8000`);
});
