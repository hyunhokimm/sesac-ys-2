const express = require("express");
const user = express.Router();
const userInfo = require("../../controllers/conUser/user");

user.get("/", userInfo.userget);
