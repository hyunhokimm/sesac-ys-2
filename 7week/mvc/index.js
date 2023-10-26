const express = require("express");
const app = express();
const PORT = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
const controller = require("./controllers/Cmain");

const a = require("./routes");

app.use("/", a);

app.get("*", (req, res) => {
  res.send("등록되어 있지 않습니다.");
});

app.listen(PORT, () => {
  console.log(`http://localhost:8000`);
});
