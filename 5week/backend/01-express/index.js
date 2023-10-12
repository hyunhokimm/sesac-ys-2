const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
// views 폴더는 디폴트값
app.set("views", "./views");

come = 0;
app.get("/", (req, res) => {
  come += 1;
  console.log(`${come}명이 방문하였습니다.`);
  res.status(200).send("hello~~~");
});

app.get("/ejs", (req, res) => {
  // render 메소드의 기본 디렉토리는 app.set의 셋팅값
  res.render("index");
});

app.get("/test", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`);
});
