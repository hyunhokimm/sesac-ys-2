const express = require("express");
const router = require("./routes/index.js");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);
app.set("view engine", "ejs");

app.listen(8000, () => {
  console.log(`http://localhost:8000`);
});
