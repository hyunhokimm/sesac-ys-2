const session = require("express-session");
const express = require("express");
const app = express();
const port = 8000;
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    // cookie:{

    // },
    // secure: true
  })
);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/set", (req, res) => {
  if (req.session.user) {
    res.render("hello", { data: req.session.user });
  } else {
    res.render("hello", { data: "" });
  }
});

app.post("/change", (req, res) => {
  console.log(req.session.user);
  if (req.session.user) {
    req.session.destroy();
    console.log("파괴");
    res.render("hello", { data: "" });
  } else {
    req.session.user = "hyunho";
    console.log("생성");
    res.render("hello", { data: req.session.user });
  }
});

app.listen(port, () => {
  console.log("Server Port : ", port);
});
