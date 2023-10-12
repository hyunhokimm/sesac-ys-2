const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("hhhh");
  res.send("hello");
});

app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`);
});
