const express = require("express");
const { main } = require("../controller/customerController");
const userRoute = express.Router();

userRoute.get("/", main);

module.exports = userRoute;
