const express = require("express");
const { userCreate } = require("../controller/userController");
const userRoute = express.Router();

userRoute.post("/create", (req, res) => {
  userCreate(req, res);
});

module.exports = userRoute;
