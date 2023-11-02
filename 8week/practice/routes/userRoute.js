const express = require("express");
const { userCreate, userLogin } = require("../controller/userController");
const userRoute = express.Router();

userRoute.post("/create", (req, res) => {
  userCreate(req, res);
});

userRoute.get("/login", (req, res) => {
  res.render("login");
});

userRoute.post("/login", (req, res) => {
  userLogin(req, res);
});

module.exports = userRoute;
