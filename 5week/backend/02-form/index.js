const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//get 요청은 쿼리로 가능
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/get", (req, res) => {
  console.log(req.query);
  res.send("요청 성공");
});

app.get("/account", (req, res) => {
  console.log(req.query);
});

//post 요청은 쿼리로 불가능.
//url로 직접 요청하는건 불가능.
// 정보가 숨겨짐.
app.post("/post", (req, res) => {
  console.log(req.body);
});

app.post("/post/ver2", (req, res) => {
  const user = req.body;
  res.render("result", {
    name: user.name,
    email: user.email,
  });
});

app.listen(PORT, () => console.log(`http://localhost:8000`));
