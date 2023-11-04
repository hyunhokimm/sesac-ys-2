const express = require("express");
const app = express();
const port = 8000;
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(cookieParser()); // 쿠키를 해석할 수 있게 해줌.

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

const cookieConfig = {
  // httpOnly: true, // document.cookie 로 접근 불가. 서버에서만 쿠키에 접근할 수 있다.
  maxAge: 1000 * 60 * 5, // ms 단위로 보존하고자 하는 기간을 설정
  // expires: "2023-11-04T18:00",
  // path: "/" // "/test" -> http://localhost:8000/test/~~~~~~~~,
  // secure: true, // https 보안 서버에서만 쿠키를 동작하게 한다.
  // signed: true // 쿠키 암호화 ->  req.signedCookies
};

app.get("/set", (req, res) => {
  // 서버가 쿠키를 만들어서 응답으로 보낸다.
  // key : key1 / value: value1
  res.cookie("key1", "value1", cookieConfig);
  res.send("set cookie");
});

app.get("/get", (req, res) => {
  console.log("cookie : ", req.cookies);
  res.send(req.cookies);
});

app.post("/popup", (req, res) => {
  res.cookie("popup", "1", cookieConfig);
  res.send("쿠키간다~");
  console.log("pop");
});

app.listen(port, () => {
  console.log("Server Port : ", port);
});
