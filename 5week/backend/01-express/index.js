const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 8000;

app.use(morgan("dev"));

app.set("view engine", "ejs");
// views 폴더는 디폴트값
app.set("views", "./views");

app.use("/static", express.static(__dirname + "/static"));

var requestTime = function (req, res, next) {
  req.time = Date.now();
  next();
};

app.use(requestTime);

come = 0;
app.get("/", (req, res) => {
  var responseText = "Hello World!";
  responseText += "Requested at: " + req.time + "";
  res.send(responseText);
});

app.get("/ejs", (req, res) => {
  // render 메소드의 기본 디렉토리는 app.set의 셋팅값
  res.render("lily", { name: "hyunho" });
});

app.get("/test", (req, res) => {
  res.render(`${__dirname}/views/index.ejs`);
});

app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`);
});
